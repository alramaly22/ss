import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../../context/AuthContext"; // Import the AuthContext hook
import "../../style/WelcomePage.css";
import { useNavigate } from "react-router-dom";

const WelcomeInit = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Access the user object from AuthContext

  const handleStartTest = () => {
    navigate("/homepage");
  };

  return (
    <div className="welcome-section">
      <div className="welcome-content">
        <h1 className="welcome-title">مرحبًا بك، {user ? user.displayName : "ضيف"}</h1>
        <p className="welcome-description">
          مرحبًا بكم في منصتنا الرائدة التي تجمع بين الإبداع والتميز! نحن هنا لنكون
          شريككم الأمثل في تحقيق أحلامكم وأهدافكم. نسعى لتقديم تجربة فريدة
          تركز على الجودة.
        </p>
        <Button variant="primary cta-btn" className="m-2" onClick={handleStartTest}>
          <span>ابدأ الأختبار</span>
        </Button>
      </div>
    </div>
  );
};
export default WelcomeInit;
