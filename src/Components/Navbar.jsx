import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-end rounded-xl ">
            <div>
                <button className="mr-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    <Link to="/login-signup">Login</Link>
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                    <Link to="/login-signup">Signup</Link>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
