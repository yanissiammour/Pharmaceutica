// routes/clientRoutes.js
import express from 'express';
import {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
} from '../controllers/clientController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// All client routes require login and specific roles
router.use(protect);
router.use(authorize('admin', 'sales', 'accounting'));

router.route('/')
  .get(getAllClients)
  .post(createClient);

router.route('/:id')
  .get(getClientById)
  .put(updateClient)
  .delete(deleteClient);

export default router;