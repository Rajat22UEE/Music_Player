import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="sticky top-0 left-0  text-white rounded-xl flex flex-col gap-2 h-screen w-80 ">
            <div className="bg-gray-900 text-white h-44 p-4 rounded-xl flex flex-col">
                <h2 className="text-xl font-bold flex justify-center mb-4">Sidebar</h2>
                <Link to="/" className="text-xl font-bold flex items-center hover:text-gray-400">
                    <FaHome className="mr-2" /> Home
                </Link>
                <div className="flex items-center bg-gray-800 rounded-md p-2 mt-4">
                    <FaSearch className="mr-2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent text-white focus:outline-none"
                    />
                </div>
            </div>

            <div className="bg-gray-900 text-white w-full h-[34rem] p-4 rounded-xl">
                {/* Content for this section */}
            </div>
        </aside>
    );
};

export default Sidebar;
