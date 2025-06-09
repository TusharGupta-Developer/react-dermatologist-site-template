import React from "react";
import { siteConfig } from "../config/siteConfig";
import "./Services.css"; // Optional: Add your CSS here

const iconMap = {
    "Skin Consultation": "ri-stethoscope-line",
    "Acne Treatment": "ri-bug-line",
    "Anti-Aging Therapy": "ri-flask-line",
    "Eczema Care": "ri ri-heart-pulse-line",
    "Skin Cancer Screening": "ri-shield-cross-line",
    "Laser Therapy": "ri-lightbulb-line",
    "Pigmentation Correction": "ri-sun-line",
    "Cosmetic Procedures": "ri-hospital-line",
};


const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">SERVICES</h2>

            <div className="services__container container grid">
                {siteConfig.services.map((service, index) => (
                    <article className="services__card" key={index}>
                        <i className={`${iconMap[service.title]} services__icon`}></i>
                        <h3 className="services__title">{service.title}</h3>
                        <p className="services__description">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
