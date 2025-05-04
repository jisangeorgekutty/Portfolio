import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__social-icons">
          <li>
            <a href="https://www.instagram.com/jisangeorge_?igsh=MXFlaG1tendpMnljNQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jisan-george-a416a6223/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/18jHg54WnQ/?mibextid=qi2Omg " target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
