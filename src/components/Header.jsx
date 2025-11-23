import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="header-container">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/">
                        <img src="/logo.png" alt="Athene Guard Security" className="header-logo" />
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
                        </li>
                        <li>
                            <Link to="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>Industries</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
                        </li>
                    </ul>

                    {/* Emergency Contact in Mobile Menu */}
                    <div className="header-emergency">
                        <svg className="header-emergency-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div className="header-emergency-text">
                            <span className="header-emergency-label">24/7 Emergency</span>
                            <a href="tel:+1234567890" className="header-emergency-number">
                                (123) 456-7890
                            </a>
                        </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/contact" className="btn btn-primary">
                            Request Quote
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
