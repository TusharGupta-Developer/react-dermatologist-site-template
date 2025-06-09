import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__grid">

                    <div className="footer__section">
                        <h3 className="footer__title">🌸 Serene Skin</h3>
                        <p className="footer__text">Empowering your confidence through expert skin care.</p>
                        <p className="footer__text">123 Wellness Avenue, Lucknow</p>
                        <p className="footer__text">Email: support@tranquilminds.in</p>
                        <p className="footer__text">Phone: +91-98765-43210</p>
                        <p className="footer__text">Mon – Sat | 10AM – 6PM</p>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__subtitle">Quick Links</h4>
                        <ul className="footer__links">
                            <li><a href="#home" className="footer__link">Home</a></li>
                            <li><a href="#about" className="footer__link">About</a></li>
                            <li><a href="#services" className="footer__link">Services</a></li>
                            <li><a href="#testimonial" className="footer__link">Testimonials</a></li>
                            <li><a href="#gallery" className="footer__link">Gallery</a></li>
                            <li><a href="#contact" className="footer__link">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__subtitle">Connect</h4>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link">Facebook</a></li>
                            <li><a href="#" className="footer__link">Instagram</a></li>
                            <li><a href="#" className="footer__link">Privacy Policy</a></li>
                            <li><a href="#" className="footer__link">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span className="footer__copy">
                        &copy; 2025 Tranquil Minds. All Rights Reserved.
                    </span>
                    <span className="footer__credit">
                        Designed & Developed by <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">Tushar Gupta</a>
                    </span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
