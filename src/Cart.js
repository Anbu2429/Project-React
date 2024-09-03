import React from 'react';

const Cart = ({ cartItems, onRemove, onQuantityChange }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
          />
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
