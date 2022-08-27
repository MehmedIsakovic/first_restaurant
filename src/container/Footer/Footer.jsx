import React from "react";
import { FooterOverlay, Newsletter } from "../../components";

import { images } from "../../constants";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

import "./Footer.scss";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links-contact">
        <h1 className="app__footer-links-contact-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links-logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links-work">
        <h1 className="app__footer-links-contact-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday: </p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday: </p>
        <p className="p__opensans">07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Mehmed Isakovic. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
