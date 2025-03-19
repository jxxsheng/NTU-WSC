import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      
      <div className="contact-content">
        <p>If you have any questions, feel free to reach out to us!</p>
        
        <div className="contact-info">
          <p><strong>Email:</strong> 20junsheng01@gmail.com</p>
          <p><strong>Address:</strong> Nanyang Technological University, Singapore</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your School Email" required />
          <textarea placeholder="Your Message" rows="8" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;