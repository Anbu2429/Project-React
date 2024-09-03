import React, { useState } from 'react';

const ReviewList = ({ reviews, onSubmitReview }) => {
  const [newReview, setNewReview] = useState({
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReview(newReview);
    setNewReview({ rating: '', comment: '' });
  };

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>Rating:</label>
        <input name="rating" value={newReview.rating} onChange={handleChange} required />
        <label>Comment:</label>
        <textarea name="comment" value={newReview.comment} onChange={handleChange} required />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewList;
