import React from 'react';

const LoginSignup = ({ isLogin, setIsLogin, showModal, setShowModal }) => {
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 z-60 relative">
          <h2 className="text-xl font-bold text-white">
            {isLogin ? 'Login' : 'Signup'}
          </h2>
          {isLogin ? (
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mt-4 mb-2 rounded bg-gray-700 text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
              />
              <button className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-600">
                Log In
              </button>
              <p className="mt-4 text-white">
                Don't have an account?{' '}
                <button onClick={toggleForm} className="text-blue-500 underline">
                  Create Account
                </button>
              </p>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mt-4 mb-2 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
              />
              <button className="w-full p-2 bg-green-500 rounded text-white hover:bg-green-600">
                Sign Up
              </button>
              <p className="mt-4 text-white">
                Already have an account?{' '}
                <button onClick={toggleForm} className="text-blue-500 underline">
                  Log In
                </button>
              </p>
            </div>
          )}
          <button
            onClick={closeModal}
            className="mt-4 p-2 bg-red-500 rounded text-white hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default LoginSignup;