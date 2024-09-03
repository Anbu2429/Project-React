// src/pages/ProductPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewList from './ReviewList';
//import ReviewList from './ReviewList';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch product details
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));

    // Fetch reviews for the product
    axios.get(`/api/products/${id}/reviews`)
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [id]);

  const handleAddToCart = () => {
    const newCartItems = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(newCartItems);
    console.log('Item added to cart:', product);
  };

  const handleSubmitReview = (review) => {
    // Post the new review (assuming backend setup)
    axios.post(`/api/products/${id}/reviews`, review)
      .then(response => setReviews([...reviews, response.data]))
      .catch(error => console.error('Error submitting review:', error));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>

      <h2>Reviews</h2>
      <ReviewList reviews={reviews} onSubmitReview={handleSubmitReview} />
    </div>
  );
};

export default ProductPage;
