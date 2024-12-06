import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext hook
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../style/CustomNavbar.css";
import OffCanvasSidebar from "./OffCanvasSidebar"; // Import the Offcanvas component
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  const { isLoggedIn, user, handleLogout } = useAuth(); // Use AuthContext
  const [username, setUsername] = useState(""); // State to hold the username
  const [showOffcanvas, setShowOffcanvas] = useState(false); // To control the Offcanvas display
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas); // Toggle off-canvas visibility
  };

  const goToSignup = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  // Update the username whenever the user data changes
  useEffect(() => {
    if (user) {
      setUsername(user.displayName || "المستخدم"); // Use the name from the user context
      console.log(user.displayName);
    }
  }, [user]);

  return (
    <nav className="custom-navbar shadow">
      <div className="navbar-container">
        {/* Navbar Brand */}
        <a href="/" className="navbar-brand">
          <img
            src="src/assets/KHATWTNTK-logo.svg"
            alt="Logo"
            className="navbar-logo"
          />
        </a>

        {/* Navbar Links */}
        <div className="navbar-links">
          <a href="#home" className="nav-link">الرئيسية</a>
          <a href="#about" className="nav-link">من نحن</a>
          <a href="#features" className="nav-link">المميزات</a>
          <a href="#doctors" className="nav-link">للأطباء</a>
          <a href="#parents" className="nav-link">للآباء</a>
        </div>

        {/* User Section */}
        {isLoggedIn ? (
          <div className="navbar-user">
            <img
              src="src/assets/user-img.jpg"
              alt="User"
              className="navbar-user-img"
              onClick={toggleOffcanvas} // Toggle off-canvas when the image is clicked
            />
            {showOffcanvas && (
              <OffCanvasSidebar username={username} onLogout={handleLogout} />
            )} {/* Show off-canvas when username is clicked */}
          </div>
        ) : (
          <button className="navbar-btn" onClick={goToSignup}>
            ابدأ الآن
          </button>
        )}
      </div>
    </nav>
  );
};

export default CustomNavbar;
