import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import logo from '../assets/Glogo.png';
import './styles/Header.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/fake-login");
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/dashboard", link: "Products" },
    { path: "/Blogs", link: "Guide" },
    { path: "/#faq", link: "FAQ" },
  ];

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <div className="logo-area" onClick={() => navigate("/")}>
          <img src={logo} alt="CyberCore" className="logo-icon" />
          <div className="logo-text">Cyber<span>Core</span></div>
        </div>

        {/* Desktop & Mobile Menu */}
        <nav className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map(({ path, link }) => (
              <li key={link}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive && !path.includes('#') ? 'active' : ''}`
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="actions-area">
            <button type="button" onClick={handleLogout} className="logout-btn">
              Log Out
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>
    </header>
  );
}
