import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import '../style/OffCanvasSidebar.css'; // Ensure custom styles are included

function OffCanvasSidebar({ username, onLogout }) {
  const [show, setShow] = useState(true); // Always show the offcanvas by default

  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>القائمة</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Username at the top */}
        <div className="offcanvas-username">
          <span>{username}</span>
        </div>

        {/* Navigation Links */}
        <div className="off-canvas-links">
          <a href="#home" onClick={handleClose}>الرئيسية</a>
          <a href="#about" onClick={handleClose}>من نحن</a>
          <a href="#features" onClick={handleClose}>المميزات</a>
          <a href="#doctors" onClick={handleClose}>للأطباء</a>
          <a href="#parents" onClick={handleClose}>للآباء</a>
          <a href="#contact" onClick={handleClose}>اتصل بنا</a>
        </div>

        {/* Logout Button */}
        <div className="offcanvas-logout">
          <button className="logout-btn" onClick={onLogout}>تسجيل الخروج</button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvasSidebar;
