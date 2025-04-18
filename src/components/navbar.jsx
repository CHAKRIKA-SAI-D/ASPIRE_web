import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ASPIRE</div>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={600} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={600} offset={-70}>
            Events
          </Link>
        </li>
        <li>
          <Link to="winners" smooth={true} duration={600} offset={-70}>
            Winners
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
