// routes/authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register',protect,authorize('admin'),register);
router.post('/login', login);

export default router;