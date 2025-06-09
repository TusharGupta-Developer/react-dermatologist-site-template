import React from "react";
import { siteConfig } from "../config/siteConfig";
import profileImg from "../assets/img/About.png"; // Adjust path if needed
import "./About.css"; // Optional: you can define styles here
import Button from "../components/common/Button";


const About = () => {
  return (
    <section className="info section" id="about">
      <h2 className="section__title">My Info</h2>

      <div className="about__container container grid">
        <div className="about grid">
          <div className="about__content grid">
            <h3 className="info__title">About Me</h3>
            <p className="about__description paragraph-text">
              Hi, I’m a dedicated <span>dermatologist</span> here to support you on your journey to <span>healthy, radiant skin</span>. I offer a caring, expert environment where your concerns are <span>heard, valued, and treated</span> with personalized care. Let’s take the first step toward <span>confidence and glowing skin</span> together.

            </p>
            <Button className="about_button" />
          </div>
          <img src={profileImg} alt="Therapist" className="about__img" />
        </div>


        {/* EXPERIENCE */}

        <div className="about__experience grid">
          <h3 className="info__title">Experience</h3>
          <ul className="experience__list grid paragraph-text">
            <li>
              <strong>Licensed Dermatologist</strong> — 5+ years providing expert skin care focused on healing, rejuvenation, and patient confidence.
            </li>
            <li>
              Specialized in <span>advanced skin treatments</span> and personalized care plans for various skin conditions.
            </li>
            <li>
              Skilled in building a <span>trusted doctor-patient relationship</span> to ensure comfort and tailored treatment.
            </li>
            <li>
              Expertise in diagnosing and managing <span>acne, eczema, psoriasis</span>, and other common skin disorders.
            </li>
            <li>
              Committed to continuous learning and using <span>evidence-based dermatological practices</span> for optimal results.
            </li>
          </ul>

        </div>

      </div>

    </section >
  );
};

export default About;
