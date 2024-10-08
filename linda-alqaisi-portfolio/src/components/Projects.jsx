import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section page">
      <div className="container">
        <h1>🚀My Projects</h1>
        <div className="project">
          <img src="https://placehold.co/600x400?text=Restaurant+Branding" alt="Restaurant Branding Project" />
          <h2>🍽️Restaurant Branding Overhaul</h2>
          <p>Led a comprehensive rebranding project for a local restaurant chain, including logo design, menu layout, and interior decor concepts. The new branding increased customer engagement by 30%.</p>
        </div>
        <div className="project">
          <img src="https://placehold.co/600x400?text=Charity+Gala" alt="Charity Gala Event" />
          <h2>🎭Annual Charity Gala</h2>
          <p>Organized and managed a high-profile charity gala for 500 guests, coordinating vendors, entertainment, and logistics. The event raised over $100,000 for local charities.</p>
        </div>
        <div className="project">
          <img src="https://placehold.co/600x400?text=Marketing+Campaign" alt="Multimedia Marketing Campaign" />
          <h2>📱Multimedia Marketing Campaign</h2>
          <p>Developed and executed a multimedia marketing campaign for a tech startup, including video production, social media content, and interactive web elements. The campaign resulted in a 50% increase in brand awareness.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;