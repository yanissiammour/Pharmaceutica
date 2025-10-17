// models/Supplier.js
import db from '../utils/connectdb.js';

const Supplier = {
  findAll: (query) => {
    const dbQuery = db('suppliers').select('*').orderBy('id');
    if (query) {
      dbQuery.where('name', 'ilike', `%${query}%`);
    }
    return dbQuery;
  },
  findById: (id) => db('suppliers').where({ id }).first(),
  create: (supplier) => db('suppliers').insert(supplier).returning('*'),
  update: (id, updates) => db('suppliers').where({ id }).update(updates).returning('*'),
  remove: (id) => db('suppliers').where({ id }).del(),
};

export default Supplier;