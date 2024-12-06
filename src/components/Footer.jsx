import React from 'react';
import '../style/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#about">عن الشركة</a></li>
            <li><a href="#services">الخدمات</a></li>
            <li><a href="#membership">خطط العضوية</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>اتصل بنا</h3>
          <p>البريد الإلكتروني: info@example.com</p>
          <p>الهاتف: (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <h3>تابعنا</h3>
          <div className="social-icons">
            <a href="#" aria-label="فيسبوك"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="تويتر"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="إنستاجرام"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="لينكدإن"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} اسم شركتك. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
