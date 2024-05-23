// ContactUs.js

import './Contact.css';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send form data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="contact-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="contact-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="contact-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
