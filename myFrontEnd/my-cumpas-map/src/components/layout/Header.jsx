// src/components/layout/Header.jsx
import React from 'react';
import { Bell, User } from 'lucide-react';
import UserProfile from '../common/UserProfile';

const Header = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex-1" />
      <div className="flex items-center space-x-4">
        <Bell className="h-6 w-6 text-gray-500 cursor-pointer" />
        <UserProfile />
      </div>
    </div>
  );
};
export default Header;