import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../constants/svgs';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>© 2024 Linda AlQaisi. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/lindaalqaisi/lindaalqaisi.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
