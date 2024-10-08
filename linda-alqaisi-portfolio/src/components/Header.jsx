import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, AboutIcon, ProjectsIcon, ServicesIcon, ContactIcon, ResourcesIcon } from '../constants/svgs';

const Header = () => {
  return (
    <header>
      <div className="container">
<div className="logo">
  <svg viewBox="0 0 100 100" width={50} height={50}>
    <rect width={100} height={100} fill="#007bfc" />
    <text x={50} y={65} textAnchor="middle" fill="white" fontSize={45} fontFamily="Arial, sans-serif" fontWeight="bold">LA</text>
  </svg>
</div>

        <nav>
          <Link to="/"><HomeIcon /> Home</Link>
          <Link to="/about"><AboutIcon /> About</Link>
          <Link to="/projects"><ProjectsIcon /> Projects</Link>
          <Link to="/services"><ServicesIcon /> Services</Link>
          <Link to="/contact"><ContactIcon /> Contact</Link>
          <Link to="/resources"><ResourcesIcon /> Resources</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;