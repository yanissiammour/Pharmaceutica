// routes/productRoutes.js
import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Anyone logged in can view products
router.route('/')
  .get(protect, getAllProducts)
  // Only admins and warehouse staff can create products
  .post(protect, authorize('admin', 'warehouse'), createProduct);

router.route('/:id')
  .get(protect, getProductById)
  // Only admins and warehouse staff can update or delete products
  .put(protect, authorize('admin', 'warehouse'), updateProduct)
  .delete(protect, authorize('admin', 'warehouse'), deleteProduct);

export default router;