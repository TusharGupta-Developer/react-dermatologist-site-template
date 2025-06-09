import React, { useRef } from 'react';
import './CircularGallery.css';
import { siteConfig } from '../../config/siteConfig';

const CircularGallery = () => {
    const scrollRef = useRef(null);

    const getScrollAmount = () => {
        const container = scrollRef.current;
        const imageEl = container?.querySelector('.circular-gallery__image');
        const gap = parseInt(getComputedStyle(container).gap) || 0;
        const imageWidth = imageEl?.offsetWidth || 0;
        return imageWidth + gap;
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        }
    };

    return (
        <section className="gallery section" id="gallery">
            <h2 className="section__title">GALLERY</h2>
            <div className="container gallery__container">
                <div className="gallery-scroll-container">
                    <div ref={scrollRef} className="circular-gallery__wrapper">
                        {siteConfig.circularGallery.map((img, index) => (
                            <div key={index} className="circular-gallery__item">
                                <img
                                    src={img.image}
                                    alt={img.alt || `Gallery ${index + 1}`}
                                    className="circular-gallery__image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-controls">
                    <button onClick={scrollLeft} aria-label="Scroll left" title="Scroll left">&larr;</button>
                    <button onClick={scrollRight} aria-label="Scroll right" title="Scroll right">&rarr;</button>
                </div>
            </div>
        </section>
    );
};

export default CircularGallery;
