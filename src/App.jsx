
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';
import Sidebar from './Components/Sidebar';
import Player from './Components/Player';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-black gap-2">
        <div className="flex flex-col gap-2">
          <Sidebar />
          <Player />
        </div>
        <div className="flex flex-col flex-grow">
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
