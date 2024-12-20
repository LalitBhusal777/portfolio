import React from "react";
import "./About.css";
import profile_img from "/src/assets/profile_img.svg";

const About = () => {
  const skillsStyle = {
    display: "inline-block",
    margin: "5px 10px",
    padding: "8px 15px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <div id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-details">
          <h2>About Me</h2>
          <p>
            Hello! I’m <strong>Lalit Bhusal</strong>, a passionate web developer
            specializing in front-end development. I create beautiful,
            responsive, and user-friendly web applications. I am skilled in
            modern frameworks like <strong>React.js</strong> and enjoy turning
            ideas into reality with clean, efficient code.
          </p>
          <p>
            I am always eager to learn new technologies and improve my skills. I
            believe in the power of teamwork, creativity, and problem-solving.
          </p>
          <div className="about-info">
            <p><strong>Location:</strong> Kathmandu, Nepal</p>
            <p><strong>Email:</strong> lalitbhusal165@gmail.com</p>
            <p><strong>Phone:</strong> 9742863845</p>
            <p><strong>Skills:</strong></p>
            <div>
              <span style={skillsStyle}>HTML</span>
              <span style={skillsStyle}>CSS</span>
              <span style={skillsStyle}>JavaScript</span>
              <span style={skillsStyle}>React.js</span>
              <span style={skillsStyle}>Laravel</span>
            </div>
          </div>
          <div className="about-achievements">
            <h3>My Achievements</h3>
            <p><strong>10+ Years</strong> of Experience in Web Development</p>
            <p><strong>90+ Projects</strong> Successfully Delivered</p>
            <p><strong>15+ Happy Clients</strong> Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
