import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentInfo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <input name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Payment Info:</label>
        <input name="paymentInfo" value={formData.paymentInfo} onChange={handleChange} required />
      </div>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default CheckoutForm;
