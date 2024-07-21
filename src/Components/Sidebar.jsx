import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="bg-slate-900 text-white w-80 p-4 rounded-xl">
      <div className="mb-4">
        <h2 className="text-xl font-bold flex justify-center">Sidebar</h2>
      </div>
      <div className="mb-4">
        <Link to="/" className="text-xl font-bold flex items-center hover:text-gray-400">
          <FaHome className="mr-2" /> Home
        </Link>
      </div>
      <div className="flex items-center bg-gray-800 rounded-md p-2">
        <FaSearch className="mr-2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent text-white focus:outline-none" 
        />
      </div>
    </aside>
  );
};

export default Sidebar;
