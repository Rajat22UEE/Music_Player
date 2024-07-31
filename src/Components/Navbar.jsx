import React, { useState } from 'react';
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
    <nav className="sticky top-0 z-50  bg-gray-800 p-4 text-white flex justify-end rounded-xl">
      
      <div>
        <button onClick={openLogin} className="mr-4 bg-blue-500 p-2 rounded-full border-2 text-white ">Login</button>
        <button onClick={openSignup} className="bg-green-500 p-2 rounded-full border-2 text-white">Signup</button>
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