import React from "react";
import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-item footer-about">
            <AnimationOnScroll
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
             
            </AnimationOnScroll> <p>Ivan Gasques </p>
            <div className="social-links ">

              <a href="https://github.com/IvanGasques" target="_blank" rel="noreferrer">
                {" "}
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-gasques-1349b0229"
                target="_blank" rel="noreferrer"
              >
                {" "}
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/gasques.ivan/"
                target="_blank" rel="noreferrer"
              >
                {" "}
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;