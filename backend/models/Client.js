// models/Client.js
import db from '../utils/connectdb.js';

const Client = {
  findAll: (query) => {
    const dbQuery = db('clients').select('*').orderBy('id');
    if (query) {
      dbQuery.where('name', 'ilike', `%${query}%`);
    }
    return dbQuery;
  },
  findById: (id) => db('clients').where({ id }).first(),
  create: (client) => db('clients').insert(client).returning('*'),
  update: (id, updates) => db('clients').where({ id }).update(updates).returning('*'),
  remove: (id) => db('clients').where({ id }).del(),
};

export default Client;