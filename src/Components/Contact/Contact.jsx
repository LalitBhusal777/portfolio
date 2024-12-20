import React from 'react';
import './Contact.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "18e1e820-a159-4371-8c6d-2034f7847cef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); // Clears the form inputs
      window.location.hash = "#home"; // Redirects to the home section
    }
  };

  return (
    <div id="contact" className="contact-container">
      {/* Left Side: Contact Details */}
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p><strong>Name:</strong> Lalit Bhusal</p>
        <p><strong>Email:</strong> lalitbhusal165@example.com</p>
        <p><strong>Phone:</strong> 9742863845</p>
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
