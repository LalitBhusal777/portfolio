import React from "react";
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from "/src/assets/profile_img.svg";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>Hello, I am Lalit Bhusal</h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="Anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
