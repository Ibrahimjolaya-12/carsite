import React, { useState } from 'react';
import { PhoneFilled, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav 
        className="custom-navbar" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          backgroundColor: 'transparent', 
          zIndex: 10
        }}
      >
        <div className="container-fluid navbar-inner">
          <NavLink to="/" className="navbar-brand text-dark fs-1">Solstice Detailing</NavLink>
          
          {/* Toggle button - hamesha dikhega mobile pe (CSS se control) */}
          <button 
            className="navbar-toggle-btn" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <CloseOutlined style={{ color: "#000", fontSize: "24px", fontWeight: "bold" }} />
            ) : (
              <MenuOutlined style={{ color: "#000", fontSize: "24px", fontWeight: "bold" }} />
            )}
          </button>
          
          {/* Desktop menu - CSS se control hoga */}
          <div className={`navbar-menu ${isOpen ? 'menu-open' : ''}`}>
            <ul className="navbar-nav-custom">
              <li className="nav-item-custom">
                <NavLink 
                  to="/services" 
                  className="nav-link-custom text-dark custom-nav-link fs-4" 
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item-custom">
                <NavLink 
                  to="/gallery" 
                  className="nav-link-custom text-dark custom-nav-link fs-4" 
                  onClick={closeMenu}
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item-custom">
                <NavLink 
                  to="/contact" 
                  className="nav-link-custom text-dark custom-nav-link fs-4" 
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            
            <div className="navbar-phone">
              <a href="tel:1234567890" className="text-dark d-flex align-items-center gap-2 text-decoration-underline fw-bold fs-4">
                <PhoneFilled />
                <span>123-456-7890</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;