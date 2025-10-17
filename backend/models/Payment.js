// models/Payment.js
import db from '../utils/connectdb.js';

const Payment = {
  findAll: (orderId) => {
      const dbQuery = db('payments').select('*').orderBy('id');
      if(orderId) {
          dbQuery.where({ order_id: orderId });
      }
      return dbQuery;
  },
  findById: (id) => db('payments').where({ id }).first(),
  create: (payment) => db('payments').insert(payment).returning('*'),
  update: (id, updates) => db('payments').where({ id }).update(updates).returning('*'),
  remove: (id) => db('payments').where({ id }).del(),
};

export default Payment;