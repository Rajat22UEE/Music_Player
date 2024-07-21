import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from '../Pages/LoginSignup';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openLogin = () => {
    setIsLogin(true);
    setShowModal(true);
  };

  const openSignup = () => {
    setIsLogin(false);
    setShowModal(true);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-end">
      
      <div>
        <button onClick={openLogin} className="mr-4 bg-blue-500 p-2 rounded text-white">Login</button>
        <button onClick={openSignup} className="bg-green-500 p-2 rounded text-white">Signup</button>
      </div>
      {showModal && (
        <LoginSignup 
          isLogin={isLogin} 
          setIsLogin={setIsLogin} 
          showModal={showModal} 
          setShowModal={setShowModal} 
        />
      )}
    </nav>
  );
};

export default Navbar;
