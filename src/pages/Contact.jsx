import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; 

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'your_serviceID',
                'your_templateID',
                form.current,
                'your_publicKey'
            )
            .then(() => {
                setMessage('Message sent successfully ✅');
                setTimeout(() => setMessage(''), 5000);
                form.current.reset();
            })
            .catch(() => {
                setMessage('Message not sent (service error) ❌');
                setTimeout(() => setMessage(''), 5000);
                form.current.reset();
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">CONTACT ME</h2>

            <div className="contact__container container grid">
                <form ref={form} onSubmit={sendEmail} className="contact__form grid" id="contact--form">
                    <div className="contact__group grid">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                            className="contact__input"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="contact__input"
                        />
                    </div>

                    <textarea
                        name="user_message"
                        placeholder="Message"
                        required
                        className="contact__input contact__area"
                    ></textarea>

                    <button type="submit" className="button contact__button">
                        Send Message
                    </button>

                    <p className="contact__message" id="contact--message">{message}</p>
                </form>

                <div className="contact__social grid">
                    <a
                        href="https://www.linkedin.com/in/tushargupta-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-link"
                    >
                        <i className="ri-linkedin-box-line"></i>
                        <span>Linkedin</span>
                    </a>

                    <a
                        href="https://www.instagram.com/king_tushar____?igsh=MTJ1emUxbHZ4MnFrdA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-link"
                    >
                        <i className="ri-instagram-line"></i>
                        <span>Instagram</span>
                    </a>

                    <a
                        href="https://x.com/TusharDev1111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-link"
                    >
                        <i className="ri-twitter-x-line"></i>
                        <span>Twitter-X</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
