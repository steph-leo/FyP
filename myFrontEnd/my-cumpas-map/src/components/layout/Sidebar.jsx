  // src/components/layout/Sidebar.jsx
import React from 'react';
import { Home, Map, Bell, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <Map size={20} />, label: 'Navigation' },
    { icon: <Bell size={20} />, label: 'Alerts' },
    { icon: <Settings size={20} />, label: 'Settings' },
    { icon: <HelpCircle size={20} />, label: 'Help' }
  ];
  return (
    <div className="w-64 bg-blue-700 text-white p-4">
      <h1 className="text-xl font-bold mb-8">Campus Navigator</h1>
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 rounded hover:bg-blue-600 cursor-pointer">
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;