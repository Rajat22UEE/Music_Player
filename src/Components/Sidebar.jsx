import { Link } from 'react-router-dom';
import React from 'react';


const Sidebar = () => {
  return (
    <aside className="bg-slate-900 text-white w-80 h-40 p-4 rounded-xl">
      <div className="mb-4">
        <h2 className="text-xl font-bold flex justify-center">Sidebar</h2>
      </div>
      <div>
        <Link to="/" className="mr-4 text-xl font-bold flex">Home</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
