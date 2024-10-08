import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon } from '../constants/svgs';

const Home = () => {
  return (
    <section id="home" className="section page active">
      <div className="container">
        <h1>👋Welcome to Linda AlQaisi's Portfolio</h1>
<p><span className="emoji">🎨</span>Multimedia Designer | <span className="emoji">🎉</span>Event Organizer | <span className="emoji">💼</span>Manager</p>

        <p><strong>Mission Statement:</strong> To create captivating multimedia experiences and seamlessly organize events that leave lasting impressions.</p>


<Link to="/about"  id="learn-more" style={{backgroundColor: '#007bfc', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: '50px', boxShadow: '0 9px #999', outline: 'none'}}>Learn More About Me</Link>

        
<p style={{marginTop: '20px'}}>
  <a href="https://github.com/lindaalqaisi/lindaalqaisi.com" target="_blank" style={{display: 'inline-flex', alignItems: 'center', backgroundColor: '#24292e', color: 'white', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none', fontSize: '16px', transition: 'background-color 0.3s ease'}}>
    <svg height={32} aria-hidden="true" viewBox="0 0 16 16" version="1.1" width={32} data-view-component="true" style={{fill: 'white', marginRight: '10px'}}>
      <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
    View on GitHub
  </a>
</p>

      </div>
    </section>
  );
};

export default Home;