// models/Order.js
import db from '../utils/connectdb.js';

const Order = {
  findAll: () => db('orders').select('*').orderBy('id', 'desc'),
  findById: (id) => db('orders').where({ id }).first(),
  findItemsByOrderId: (orderId) => db('order_items').where({ order_id: orderId }),

  // Creates an order and its items within a single database transaction
  createWithItems: async (orderData) => {
    const { client_id, status, items } = orderData; // items is an array of { batch_id, quantity, unit_price }

    return db.transaction(async (trx) => {
      // 1. Calculate total order price from items
      const total = items.reduce((sum, item) => sum + item.quantity * item.unit_price, 0);

      // 2. Insert the main order record
      const [newOrder] = await trx('orders')
        .insert({ client_id, status, total })
        .returning('*');

      // 3. Prepare order items and update stock quantities
      for (const item of items) {
        // Check for sufficient stock
        const batch = await trx('product_batches').where({ id: item.batch_id }).forUpdate().first();
        if (!batch || batch.stock_quantity < item.quantity) {
          throw new Error(`Insufficient stock for batch ID ${item.batch_id}.`);
        }
        
        // Decrement stock
        await trx('product_batches')
          .where({ id: item.batch_id })
          .decrement('stock_quantity', item.quantity);
      }

      // 4. Insert all order items
      const itemsToInsert = items.map(item => ({
        order_id: newOrder.id,
        batch_id: item.batch_id,
        quantity: item.quantity,
        unit_price: item.unit_price,
        subtotal: item.quantity * item.unit_price,
      }));

      const newItems = await trx('order_items').insert(itemsToInsert).returning('*');
      
      return { ...newOrder, items: newItems };
    });
  },

  update: (id, updates) => db('orders').where({ id }).update(updates).returning('*'),
  remove: (id) => db('orders').where({ id }).del(), // Note: order_items are deleted automatically via ON DELETE CASCADE
};

export default Order;