import React, { useState, useRef, useEffect } from 'react'
import './ScrollToTop.css'

function ScrollToTop() {

    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 350) {
                scrollRef.current?.classList.add("show__scroll");
            } else {
                scrollRef.current?.classList.remove("show__scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a href="#" className="scroll__up" ref={scrollRef}>
            <i className="ri-arrow-up-line"></i>
        </a>
    );
}

export default ScrollToTop