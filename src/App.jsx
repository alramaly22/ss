import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import TestWelcome from './pages/TestPages/WelcomePage';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/TestWelcome" element={<TestWelcome />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
