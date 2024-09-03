import React, { useState } from 'react';

const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user profile (e.g., send data to backend)
    console.log('Profile updated:', profileData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input name="username" value={profileData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={profileData.email} onChange={handleChange} required />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfile;
