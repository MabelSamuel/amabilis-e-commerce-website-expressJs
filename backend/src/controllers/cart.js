import User from '../models/User.js';
import Cart from '../models/Cart.js';

export const syncCart = async (req, res) => {
    try {
        const userId = req.userId;
        const { cart } = req.body;
    
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        let userCart = await Cart.findOne({ user: userId });
        if (!userCart) {
          userCart = new Cart({
            user: userId,
            items: cart.map(item => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
              totalPrice: item.quantity * item.price,
            })),
            totalPrice: cart.reduce((total, item) => total + (item.quantity * item.price), 0),
          });
        } else {
          userCart.items = cart.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            totalPrice: item.quantity * item.price,
          }));
          userCart.totalPrice = cart.reduce((total, item) => total + (item.quantity * item.price), 0);
        }
    
        await userCart.save();
    
        user.cart = userCart._id;
        await user.save();
    
        res.json({ success: true, cart: userCart.items, totalPrice: userCart.totalPrice });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
}