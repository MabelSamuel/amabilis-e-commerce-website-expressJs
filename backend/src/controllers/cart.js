import User from '../models/User.js';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

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

export const getCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { page = 1, limit = 10 } = req.query;
    const cart = await Cart.findOne({user: userId});

    if (!cart) {
      return res.status(200).json({
        items: [],
        total: 0
      })
    } 

    const items = await cartItems.find({ cart: cart._id })

    let total = 0;
    const cartItems = cart.items.map((item) => {
      const price = item.productId.price;
      const itemTotal = item.quantity * price;
      total += itemTotal

      return {
        product: item.productId,
        quantity: item.quantity,
        price,
        itemTotal
      }
    })

    res.json({
      items: cartItems,
      total
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const addToCart = async(req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    const product = await Product.findById(productId)
    if (!product) {
      return res.status(400).json({ message: "Product not found!" })
    }

    let cart = await Cart.findOne({ user: userId })
    if (!cart) {
      cart = new Cart({ user: userId, items: [] })
    }

    const cartItemIndex = cart.items.findIndex(item => item.productId.toString() === productId)
    if (cartItemIndex > -1) {
      cart.items[cartItemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity })
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart" })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const removeItemFromCart = async(req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}