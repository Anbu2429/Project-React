// src/pages/HomePage.js

import React from 'react';
import ProductList from './ProductList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Toy Store</h1>
      <p>Explore our wide range of toys and find the perfect one for your little ones!</p>
      <ProductList />
    </div>
  );
};

export default HomePage;
