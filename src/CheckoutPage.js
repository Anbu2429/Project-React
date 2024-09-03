// src/pages/CheckoutPage.js

import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleCheckoutSubmit = (formData) => {
    // Send order data to the backend (not implemented here)
    console.log('Order submitted:', formData);
    // After successful checkout, navigate to confirmation page or home
    navigate('/');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onSubmit={handleCheckoutSubmit} />
    </div>
  );
};

export default CheckoutPage;
