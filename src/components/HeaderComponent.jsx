import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import osuLogo from '../images/primary-brand.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo-container">
                {/* Link wraps the image without additional styling */}
                <Link to="/home" style={{ display: 'inline-block', lineHeight: 0 }}>
                    <img src={osuLogo} alt="OSU Logo" className="header-logo" />
                </Link>
                <span className="header-text">Computer Science <br/>Graduate Student Association</span>
            </div>
            <nav className="header-nav">
                <Link to="/about">ABOUT US</Link>
                <Link to="/committee">COMMITTEE</Link>
                <Link to="/events">EVENTS</Link>
                <Link to="/clubs">CLUBS</Link>
                <Link to="/alumni">ALUMNI</Link>
                <Link to="/admin">ADMIN</Link>
            </nav>
        </header>
    );
};

export default Header;
