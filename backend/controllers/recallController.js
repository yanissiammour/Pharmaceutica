// controllers/recallController.js
import Recall from '../models/Recall.js';

// Helper functions for consistent responses
const handleResponse = (res, data, statusCode = 200) => res.status(statusCode).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

/**
 * Creates a new product recall.
 * Expects { batch_id, reason } in the request body.
 */
export const createRecall = async (req, res) => {
  try {
    // Knex insert with .returning() returns an array
    const [newRecall] = await Recall.create({ ...req.body, status: 'active' });
    handleResponse(res, newRecall, 201);
  } catch (err) {
    handleError(res, err);
  }
};

/**
 * Retrieves all active product recalls.
 */
export const getActiveRecalls = async (req, res) => {
  try {
    const recalls = await Recall.findActive();
    handleResponse(res, recalls);
  } catch (err) {
    handleError(res, err);
  }
};

/**
 * Resolves a product recall by its ID.
 */
export const resolveRecall = async (req, res) => {
  try {
    const resolvedRecall = await Recall.resolve(req.params.id);

    if (resolvedRecall.length > 0) {
      handleResponse(res, resolvedRecall[0]);
    } else {
      res.status(404).json({ message: 'Recall not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};