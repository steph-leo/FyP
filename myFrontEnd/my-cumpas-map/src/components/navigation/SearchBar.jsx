
// src/components/navigation/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search for a location..."
        className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={onChange}
      />
      <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;