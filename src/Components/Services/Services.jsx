import React from "react";
import "./Services.css"; // Add this CSS file to style the component

const Services = () => {
  return (
    <section className="services">
      <div id="services" className="services-title">
        <h2>My Services</h2>
        <p>What I Offer</p>
      </div>
      <div className="services-container">
        <div className="service-item">
          <div className="service-icon">📈</div>
          <h3>Digital Marketing</h3>
          <p>Boost your online presence with strategies tailored to your business goals.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">💻</div>
          <h3>Website Designing</h3>
          <p>Creating responsive websites that provide an exceptional user experience.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">✍️</div>
          <h3>Content Writing</h3>
          <p>Engaging content that captivates your audience and boosts SEO performance.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">🎨</div>
          <h3>Graphics Design</h3>
          <p>Eye-catching designs for logos, branding, brochures, and more.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">📱</div>
          <h3>Social Media</h3>
          <p>Build and engage a community around your brand on social media.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
