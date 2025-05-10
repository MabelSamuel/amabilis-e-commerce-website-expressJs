import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { addToCart, getCart, syncCart } from '../controllers/cart.js'

const router = express.Router();

router.use(authMiddleware)

router.post('/sync', syncCart);
router.get('/', getCart);
router.post('/', addToCart)

export default router;
