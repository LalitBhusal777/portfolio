import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import AnchorLink
import "./Navbar.css"; // CSS file

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        {["home", "about", "services", "work", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className={`Anchor-link ${menu === item ? "active-link" : ""}`}
              offset={50}
              href={`#${item}`}
            >
              <p onClick={() => {
                setMenu(item);
                setIsMenuOpen(false); // Close menu on selection
              }}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="Anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com/your-twitter-profile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Navbar;
