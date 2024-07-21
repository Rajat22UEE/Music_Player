// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';
import Sidebar from './Components/Sidebar';


const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-black p-2 sticky top-0 ">
        <Sidebar />
        <div className="flex flex-col flex-grow gap-2 ml-2">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login-signup" element={<LoginSignup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
