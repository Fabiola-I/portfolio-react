import React, { useState } from "react";
import "../styles/contact.css";
import contactData from "../data/contact.json";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (form is static)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="social-links">
            {contactData.socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
