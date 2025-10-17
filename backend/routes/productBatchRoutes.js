// routes/productBatchesRoutes.js
import express from 'express';
import {
  getAllProductBatchs,
  getProductBatchById,
  createProductBatch,
  updateProductBatch,
  deleteProductBatch
} from '../controllers/productBatchController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Anyone logged in can view products
router.route('/')
  .get(protect, getAllProductBatchs)
  // Only admins and warehouse 
  .post(protect, authorize('admin', 'warehouse'), createProductBatch);

router.route('/:id')
  .get(protect, getProductBatchById)
  // Only admins and warehouse
  .put(protect, authorize('admin', 'warehouse'), updateProductBatch)
  .delete(protect, authorize('admin', 'warehouse'), deleteProductBatch);

export default router;