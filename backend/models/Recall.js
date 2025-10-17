// models/Recall.js
import db from '../utils/connectdb.js';

const Recall = {
  /**
   * Creates a new recall.
   * @param {object} recall - The recall data (e.g., { batch_id, reason }).
   * @returns {Promise<object[]>} A promise that resolves to an array containing the new recall.
   */
  create: (recall) => db('recalls').insert(recall).returning('*'),

  /**
   * Finds all active recalls and joins them with their product batch details.
   * @returns {Promise<object[]>} A promise that resolves to an array of active recalls.
   */
  findActive: () =>
    db('recalls as r')
      .select(
        'r.*',
        'pb.batch_no',
        'pb.expiry_date',
        'pb.product_id'
      )
      .join('product_batches as pb', 'pb.id', 'r.batch_id')
      .where('r.status', 'active'),

  
  findActiveByBatch: (batchId) =>
    db('recalls')
      .where({ batch_id: batchId, status: 'active' })
      .first(),
      
  /**
   * Resolves a recall by updating its status.
   * @param {number} id - The ID of the recall to resolve.
   * @returns {Promise<object[]>} A promise that resolves to an array containing the updated recall.
   */
  resolve: (id) =>
    db('recalls')
      .where({ id })
      .update({ status: 'resolved' })
      .returning('*'),
};

export default Recall;