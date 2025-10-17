// routes/orderRoutes.js
import express from 'express';
import { body } from 'express-validator';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';
import {validateRequest} from '../middleware/validMiddleware.js'
import { checkRecall } from '../middleware/checkRecallMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, authorize('admin', 'sales', 'warehouse', 'accounting'), getAllOrders)

  .post(protect, authorize('admin', 'sales'),
    [
    body("client_id").isInt({ gt: 0 }).withMessage("client_id must be a positive integer"),
    body("items").isArray({ min: 1 }).withMessage("items must be a non-empty array"),
    body("items.*.batch_id").isInt({ gt: 0 }).withMessage("batch_id must be a positive integer"),
    body("items.*.quantity").isInt({ gt: 0 }).withMessage("quantity must be a positive integer"),
    body("items.*.unit_price").isFloat({ gt: 0 }).withMessage("unit_price must be > 0"),
  ]
  ,validateRequest,checkRecall
  ,createOrder);

router.route('/:id')
  // Multiple roles can view a specific order
  .get(protect, authorize('admin', 'sales', 'warehouse', 'accounting'), getOrderById)
  // Sales, warehouse, and admin can update an order (e.g., change status)
  .put(protect, authorize('admin', 'sales', 'warehouse'), updateOrder)
  // Deleting an order is sensitive, so only admins can do it
  .delete(protect, authorize('admin'), deleteOrder);

export default router;