import React, { useState, useEffect } from 'react'
import './Home.css'
import profileImg from '../assets/img/hero.jpg';
// import { profileImg } from 'src\assets\Profile.png';
import useScrollReveal from '../hooks/useScrollReveal';


const phrases = [
  'Nourish. Repair. Glow...',
  'Your Skin, Our Priority...',
  'Glow Up Starts Now...',
  // 'Love the Skin You’re In...',
];
function Home() {
  useScrollReveal();

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);


  useEffect(() => {
    // Every 3 seconds start fade out
    const intervalId = setInterval(() => {
      setFade(false); // start fade-out
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!fade) {
      // Wait for fade out duration before changing phrase
      const timeoutId = setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(true); // fade-in new phrase
      }, 500); // match CSS transition duration (0.5s)

      return () => clearTimeout(timeoutId);
    }
  }, [fade]);

  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">

          <img src={profileImg} alt="Profile" className="home__img" />
          {/* <img className="hero" src={profileImg} alt="Profile" /> */}

          <div className="home__data">
            <h1 className={`home__name ${fade ? '' : 'fade-out'}`}>
              {phrases[currentPhraseIndex]}
            </h1>
            <h4 className="home__profession paragraph-text"> You’re not alone — expert skin care can help you heal, glow, and feel confident in your skin again.</h4>
          </div>


          <a href="#about" className="home__scroll">
            <div className="home__scroll--box">
              <i className="ri-arrow-down-line"></i>
            </div>

            <span className="home__scroll-text">About Me
            </span>
          </a>
        </div>
        {/* .home__scroll-text|| Recent Works  */}




      </section>
    </>
  )
}

export default Home