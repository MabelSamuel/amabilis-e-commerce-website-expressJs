import { useEffect, useContext } from 'react';
import axios from 'axios';
import { AddToCartContext } from './AddToCartContext';
import { useAuth } from './AuthContext';

const SyncCart = () => {
  const { cart, setCart, setCartCount, setCartMessage } = useContext(AddToCartContext);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && cart.length > 0) {
      syncCartWithBackend();
    }
  }, [cart, isLoggedIn]);

  const syncCartWithBackend = async () => {
    try {
      const response = await axios.post(
        '/api/cart/sync',
        { cart },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      );
      const { cart: syncedCart, totalPrice } = response.data;
      setCart(syncedCart);
      setCartCount(syncedCart.length);
      setCartMessage("Cart synced with your account!");

      localStorage.setItem("cart", JSON.stringify(syncedCart));
    } catch (error) {
      console.error("Error syncing cart with backend", error);
      setCartMessage("Error syncing cart.");
    }
  };
};

export default SyncCart;
