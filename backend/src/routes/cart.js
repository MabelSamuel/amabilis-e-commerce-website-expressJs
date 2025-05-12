import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { addToCart, getCart, removeItemFromCart, syncCart } from '../controllers/cart.js'

const router = express.Router();

router.use(authMiddleware)

router.post('/sync', syncCart);
router.get('/', getCart);
router.post('/', addToCart);
router.delete('/', clearCart)
router.patch('/:productId', updateCartItem)
router.delete('/:productId', removeItemFromCart);

export default router;
