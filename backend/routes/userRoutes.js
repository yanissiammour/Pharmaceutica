// routes/userRoutes.js
import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUsers, 
  deleteUsers, 
} from '../controllers/userController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// All user routes are protected and restricted to admins
router.use(protect);
router.use(authorize('admin'));

router.route('/')
  .get(getAllUsers);

router.route('/:id')
  .get(getUserById)
  .put(updateUsers)
  .delete(deleteUsers);

export default router;