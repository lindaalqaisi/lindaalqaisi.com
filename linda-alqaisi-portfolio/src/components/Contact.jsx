import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section page">
      <div className="container">
        <h1>📬Contact Me</h1>
        <div className="contact-info">
          <p>📧Email: info@lindaalqaisi.com</p>
          <p>📞Phone: (123) 456-7890</p>
          <p>📍Location: Toronto, ON, Canada</p>
        </div>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">📤 Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;