import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { syncCart } from '../controllers/cart.js'

const router = express.Router();

router.post('/sync', authMiddleware, syncCart);

export default router;
