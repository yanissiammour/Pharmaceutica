// models/Product.js
import db from '../utils/connectdb.js';

const Product = {
  findAll: (query) => {
    const dbQuery = db('products').select('*').orderBy('id');
    if (query) {
      dbQuery.where('name', 'ilike', `%${query}%`);
    }
    return dbQuery;
  },
  findById: (id) => db('products').where({ id }).first(),
  create: (product) => db('products').insert(product).returning('*'),
  update: (id, updates) => db('products').where({ id }).update(updates).returning('*'),
  remove: (id) => db('products').where({ id }).del(),
};

export default Product;