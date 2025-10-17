// routes/recallRoutes.js
import express from 'express';
import {
  createRecall,
  getActiveRecalls,
  resolveRecall
} from '../controllers/recallController.js';

import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect,authorize('admin', 'warehouse'),createRecall);

router.route('/active')
  .get(getActiveRecalls);

router.route('/:id/resolve')
  .patch(protect,authorize('admin','warehouse'),resolveRecall);

export default router;