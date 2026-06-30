import React, { useState, useRef } from 'react';
import { PhoneFilled, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

 



 useGSAP(() => {
    // Purane saare triggers ko clear karein taaki glitch na ho
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const elementsToColor = navRef.current.querySelectorAll(
      '.custom-nav-link, .navbar-brand, .navbar-phone a, .navbar-toggle-btn .anticon'
    );

    // ==========================================
    // CONDITION 1: Agar sirf Gallery page par hain
    // ==========================================
    if (location.pathname === '/gallery') {
      // Shuruat se hi links ko white aur background ko transparent rakho
      gsap.set(elementsToColor, { color: "#fff" });
      gsap.set(navRef.current, { backgroundColor: "transparent", height: "auto" });

      // Scroll karne par background black hoga, links white hi rahenge
      gsap.to(navRef.current, {
        backgroundColor: "#000",
        height: "70px",
        scrollTrigger: {
          trigger: "body",
          scroller: "body",
          start: "top -100vh",
          end: "top -105vh",
          scrub: 1,
        }
      });

    // ==========================================
    // CONDITION 2: Agar sirf Services page par hain
    // ==========================================
    } else if (location.pathname === '/services' || location.pathname === '/contact') {
      // Shuruat se hi links ko black aur background ko transparent rakho
      gsap.set(elementsToColor, { color: "#000" });
      gsap.set(navRef.current, { backgroundColor: "transparent", height: "auto" });

      // Scroll karne par background white ho jayega, links black hi rahenge
      gsap.to(navRef.current, {
        backgroundColor: "#ffffff",
        height: "70px",
        scrollTrigger: {
          trigger: "body",
          scroller: "body",
          start: "top -100vh",
          end: "top -105vh",
          scrub: 1,
        }
      });

    // ==========================================
    // CONDITION 3: Baki saare pages (Home, Contact, etc.)
    // ==========================================
    } else {
      // Shuruat me transparent background aur black links
      gsap.set(navRef.current, { backgroundColor: "transparent", height: "auto" });
      gsap.set(elementsToColor, { color: "#000" });

      // 100vh scroll karne par background black aur links white ho jayenge
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          scroller: "body",
          start: "top -750vh", // Fix: 750vh ka galat logic hata diya
          end: "top -750vh",
          scrub: 1,
        }
      });

      tl.to(navRef.current, {
        backgroundColor: "#ffffff",
        height: "70px",
        duration: 0.3
      }, 0);

      tl.to(elementsToColor, {
        color: "#000000",
        duration: 0.3
      }, 0);
    }

  }, { dependencies: [location.pathname], scope: navRef }); 







  return (
    <div>
      <nav 
        ref={navRef} 
        className="custom-navbar" 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          backgroundColor: 'transparent', 
          zIndex: 10,
          transition: 'color 0.3s ease'
        }}
      >
        <div className="container-fluid navbar-inner">
          <NavLink to="/" className="navbar-brand fs-1">Solstice Detailing</NavLink>
          
          <button 
            className="navbar-toggle-btn" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <CloseOutlined style={{ color: "inherit", fontSize: "24px", fontWeight: "bold" }} />
            ) : (
              <MenuOutlined style={{ color: "inherit", fontSize: "24px", fontWeight: "bold" }} />
            )}
          </button>
          
          <div className={`navbar-menu ${isOpen ? 'menu-open' : ''}`}>
            <ul className="navbar-nav-custom">
              <li className="nav-item-custom">
                <NavLink to="/services" className="nav-link-custom custom-nav-link fs-4" onClick={closeMenu}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item-custom">
                <NavLink to="/gallery" className="nav-link-custom custom-nav-link fs-4" onClick={closeMenu}>
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item-custom">
                <NavLink to="/contact" className="nav-link-custom custom-nav-link fs-4" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
            
            <div className="navbar-phone">
              <a href="tel:1234567890" className="d-flex align-items-center gap-2 text-decoration-underline fw-bold fs-4">
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