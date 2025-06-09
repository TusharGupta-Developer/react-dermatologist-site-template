import { useState, useEffect } from 'react';
import './Header.css';
import { siteConfig } from './../../config/siteConfig';
import Button from './../common/Button';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Header() {
  useScrollReveal();

  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const sections = ['home', 'work', 'info', 'services', 'contact'];

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveLink(`#${id}`);
          }
        }
      }
      const header = document.getElementById("header");
      if (header) {
        if (scrollY > 10) {
          header.classList.add("blur__header");
        } else {
          header.classList.remove("blur__header");
        }
      }
    };

    // Header blur effect logic


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">{siteConfig.brandName}</a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav--menu">
          <ul className="nav__list">
            {siteConfig.navLinks.map(link => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`nav__link ${activeLink === link.path ? 'active-link' : ''}`}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <Button className="button-hidden" />
          </ul>
          <div className="header__social grid" style={{ marginTop: "1.5rem" }}>
            <a href="https://www.linkedin.com/in/tushargupta-dev/" target="_blank" className="header__social-link">
              <i className="ri-linkedin-box-line"></i>
              <span>Linkedin</span>
            </a>

            <a href="https://www.instagram.com/king_tushar____?igsh=MTJ1emUxbHZ4MnFrdA==" target="_blank"
              className="header__social-link">
              <i className="ri-instagram-line"></i>
              <span>Instagram</span>
            </a>

            <a href="https://x.com/TusharDev1111" target="_blank" className="header__social-link">
              <i className="ri-twitter-x-line"></i>
              <span>Twitter-X</span>
            </a>
          </div>
          <div className="nav__close" id="nav--close" onClick={() => setShowMenu(false)}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav--toggle" onClick={() => setShowMenu(true)}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}
