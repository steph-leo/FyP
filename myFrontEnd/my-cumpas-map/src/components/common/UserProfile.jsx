import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
