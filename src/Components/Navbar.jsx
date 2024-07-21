// Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/login-signup">Login/Signup</Link>
    </nav>
  );
};

export default Navbar;
