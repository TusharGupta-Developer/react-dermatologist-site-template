// src/hooks/useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2000,
            delay: 200,
            reset: false, // set to true if you want it to repeat on scroll
        });

        sr.reveal(".home__data, .about__experience, .skills, .contact__container")
        sr.reveal(".home__img", { delay: 600 })
        sr.reveal(".home__img", { delay: 600 })
        sr.reveal(".hue--control", { delay: 700 }) //self
        sr.reveal(".home__scroll", { delay: 800 })

        sr.reveal(".work__card, .services__card", { interval: 100 })

        sr.reveal('.testimonial__cards', {
            oorigin: 'bottom',
            distance: '40px',
            duration: 1000,
            delay: 200,
            interval: 200, // 👈 This staggers the cards
            easing: 'ease-in-out',
            reset: false,
        });

        sr.reveal('.circular-gallery__wrapper', {
            origin: 'bottom',
            distance: '40px',
            duration: 1200,
            delay: 100,
            interval: 150,  // stagger each item by 150ms
            easing: 'ease-in-out',
            reset: false,
        });

        sr.reveal('.footer__section', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            interval: 200,  // reveals sections one-by-one
            delay: 200,
            reset: false,
        });

        sr.reveal('.footer__bottom', {
            origin: 'bottom',
            distance: '20px',
            duration: 800,
            delay: 800,
            reset: false,
        });



        // sr.reveal(".about__content", {origin: "right"}) //not give to work mkae hurle in header and home
        // sr.reveal(".about__img", {origin: "left"})
        sr.reveal(".about__content", { origin: "top" })
        sr.reveal(".about__img", { origin: "bottom" })
    }, []);
};

export default useScrollReveal;
