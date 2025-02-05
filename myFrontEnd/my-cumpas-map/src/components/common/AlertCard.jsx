// src/components/common/UserProfile.jsx
import React from 'react';
import { User } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        <User className="h-5 w-5 text-blue-700" />
      </div>
      <span className="text-gray-700">John Doe</span>
    </div>
  );
};
export default UserProfile;
