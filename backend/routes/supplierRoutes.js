// routes/supplierRoutes.js
import express from 'express';
import {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from '../controllers/supplierController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// All supplier routes require login and specific roles
router.use(protect);
router.use(authorize('admin', 'warehouse'));

router.route('/')
  .get(getAllSuppliers)
  .post(createSupplier);

router.route('/:id')
  .get(getSupplierById)
  .put(updateSupplier)
  .delete(deleteSupplier);

export default router;