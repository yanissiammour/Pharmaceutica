// model/User.js
import db from '../utils/connectdb.js'; 
import bcrypt from 'bcryptjs';

const User = {

  create: async ({ username, email, password, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [newUser] = await db('users')
      .insert({
        username,
        email,
        password: hashedPassword,
        role,
      })
      .returning(['id', 'username', 'email', 'role', 'created_at']);
    return newUser;
  },

  findByEmail: (email) => {
    return db('users').where({ email }).first();
  },

  findByUsername: (username) => {
    return db('users').where({ username }).first();
  },

  findById: (id) => {
    return db('users').where({ id }).first();
  },

  comparePassword: (candidatePassword, hash) => {
    return bcrypt.compare(candidatePassword, hash);
  },
  
  findAll: (query) => {
    const dbQuery = db('users').select('*').orderBy('id');
    if (query) {
      dbQuery.where('username', 'ilike', `%${query}%`);
    }
    return dbQuery;
  },
  
  update: (id, updates) => db('users').where({ id: id }).update(updates).returning('*'),
  remove: (id) => db('users').where({ id: id }).del(),
};

export default User;