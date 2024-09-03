// src/pages/CartPage.js

import React, { useState } from 'react';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    // Example item (replace with actual state management)
    { id: 1, name: 'Toy Car', price: 9.99, quantity: 2 },
  ]);

  const navigate = useNavigate();

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} onRemove={handleRemove} onQuantityChange={handleQuantityChange} />
      {cartItems.length > 0 && <button onClick={handleCheckout}>Proceed to Checkout</button>}
    </div>
  );
};

export default CartPage;
