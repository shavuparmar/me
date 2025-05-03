import React, { useState } from 'react';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backend-tasx.onrender.com", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        setStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <div className="ContactSection">
      <div className="Contact">
        <div className="ContactBorder">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input type="submit" className="btns" value="Submit" />
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </div>
  );
}
