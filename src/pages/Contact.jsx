import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./styles/contact.css"

const Contact = () => {
    return (
        <div className="contacts-container">
            <h2 className="contacts-title">Contact Me</h2>            
            <span className="contacts-description">
                If you have any questions or feedback, feel free get in touch with me on my socials.
            </span>
            <ul className="contact-list">
                <li>
                    Email: keithmwelase.alpha@gmail.com
                </li>
                <li>
                    <a
                    href="https://www.twitter.com/kmm_alpha"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <FaTwitter /> 
                        Twitter
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.instagram.com/kmm_alpha"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <FaInstagram />
                        Instagram
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.linkedin.com/in/keith-mwelaze-033b15178/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.github.com/kmmalpha"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <FaGithub />
                        Github
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;