// src/components/pages/Testimonial.jsx
import React, { useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import './Testimonials.css'

const Testimonial = () => {
    const { testimonials } = siteConfig;

    return (
        <section className="testimonial section" id="testimonial">
            <h2 className="section__title">Client Testimonials</h2>

            <div className="testimonial__container container grid">
                {Object.entries(testimonials).map(([type, group]) => (
                    <div key={type} className="testimonial__group">
                        <h2 className="testimonial__subtitle">{type}</h2>
                        <div className="testimonial__cards">
                            {group.map((testimonial, index) => (
                                <article className="testimonial__card" key={index}>
                                    <div className="testimonial__image-wrapper">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="testimonial__img"
                                        />
                                    </div>
                                    <div className="testimonial__content">
                                        <p className="testimonial__message">"{testimonial.message}"</p>
                                        <h4 className="testimonial__name">{testimonial.name}</h4>
                                        <p className="testimonial__title">{testimonial.title}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
