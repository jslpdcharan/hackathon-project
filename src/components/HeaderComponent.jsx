import React from 'react';
import '../styles/header.css'; // Import the CSS file for the header
import osuLogo from '../images/primary-brand.png'; // Make sure to import the OSU logo

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo-container">
                <img src={osuLogo} alt="OSU Logo" className="header-logo" />
                <span className="header-text">Computer Science <br/>Graduate Student Association</span>
            </div>
            <nav className="header-nav">
                <a href="/about-us">ABOUT US</a>
                <a href="/committee">COMMITTEE</a>
                <a href="/events">EVENTS</a>
                <a href="/clubs">CLUBS</a>
                <a href="/alumni">ALUMNI</a>
            </nav>
        </header>
    );
};

export default Header;
