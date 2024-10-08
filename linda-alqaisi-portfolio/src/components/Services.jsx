import React from 'react';


const Services = () => {
  return (
    <section id="services" className="section page">
      <div className="container">
        <h1>🛠️My Services</h1>
        <div className="service">
          <img src="https://placehold.co/50x50?text=Design" alt="Multimedia Design" />
          <h2>Multimedia Design</h2>
          <p>Creating visually stunning and engaging content across various digital platforms.</p>
        </div>
        <div className="service">
          <img src="https://placehold.co/50x50?text=Event" alt="Event Planning" />
          <h2>Event Planning and Management</h2>
          <p>Seamlessly organizing and executing events of all sizes, from intimate gatherings to large-scale galas.</p>
        </div>
        <div className="service">
          <img src="https://placehold.co/50x50?text=Consult" alt="Restaurant Consulting" />
          <h2>Restaurant Consulting</h2>
          <p>Providing expert advice on restaurant operations, menu design, and customer experience optimization.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;