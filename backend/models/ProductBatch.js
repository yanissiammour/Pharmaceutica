// models/ProductBatch.js
import db from '../utils/connectdb.js';

const ProductBatch = {
  // Find all batches, optionally filtered by product_id
  findAll: (productId) => {
    const dbQuery = db('product_batches').select('*').orderBy('id');
    if (productId) {
      dbQuery.where({ product_id: productId });
    }
    return dbQuery;
  },
  findById: (id) => db('product_batches').where({ id }).first(),
  create: (batch) => db('product_batches').insert(batch).returning('*'),
  update: (id, updates) => db('product_batches').where({ id }).update(updates).returning('*'),
  remove: (id) => db('product_batches').where({ id }).del(),
};

export default ProductBatch;