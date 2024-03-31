import React from 'react';
import '../styles/footer.css'; // Make sure you import the CSS file for the footer

// Import your social media logos
import facebookLogo from '../images/facebook.png';
import twitterLogo from '../images/twitter.png';
import instagramLogo from '../images/instagram.jpeg';
import linkedinLogo from '../images/linkedin.jpeg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Department of Computer Science</h2>
                    <address>
                        Oklahoma State University<br />
                        Mathematical Sciences<br />
                        Oklahoma State University<br />
                        Stillwater, OK 74078<br />
                        <a href="tel:405-744-5668" className="contact-link">405-744-5668</a> | <a href="mailto:cs_gsa@okstate.edu" className="contact-link">Contact Us</a>
                    </address>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/cs.okstate/" target="_blank" rel="noopener noreferrer"><img
                            src={facebookLogo} alt="Facebook"/></a>
                        <a href="https://twitter.com/osu_cs" target="_blank" rel="noopener noreferrer"><img
                            src={twitterLogo} alt="Twitter"/></a>
                        <a href="https://www.instagram.com/okstate_cs/" target="_blank" rel="noopener noreferrer"><img
                            src={instagramLogo} alt="Instagram"/></a>
                        <a href="https://www.linkedin.com/groups/8281145/" target="_blank"
                           rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
