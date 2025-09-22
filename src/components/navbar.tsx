import '../App.css';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
        <div className="navbar-container">
            <div className="navbar">
                <img src={logo} className="navbar-logo" alt="Logo" />
                
                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/skills" className="nav-link">Skills</Link>
                    <Link to="/experience" className="nav-link">Experience</Link>
                </nav>

                {/* Desktop Hire Button */}
                <a href="https://www.linkedin.com/in/marielaquintanar13b41248/" className="desktop-hire-button">
                    <button className="hire-button">Hire me</button>
                </a>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
                    <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/projects" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link to="/skills" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>My Skills</Link>
                    <Link to="/experience" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link>
                    <a href="https://www.linkedin.com/in/marielaquintanar13b41248/" className="mobile-hire-link" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="mobile-hire-button">Hire me</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

