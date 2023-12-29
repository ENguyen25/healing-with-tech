import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "./Header.css";

import logo from '../../images/logo3.png';

const PrimaryHeader = () => {
  return (
    <section>
      <div className="primary-navbar">
        <div className="primary-navbar-logo">
          <img
            className="logo"
            src={logo}
            alt="The Self-Care Coder: A Programmer's Path to Well-Being"
          />
        </div>
        {/* <div className="primary-navbar-links">
          <Link to="/latest">Latest</Link>
          <Link to="/front-end">Front-End</Link>
          <Link to="/back-end">Back-End</Link>
          <Link to="/full-stack">Full-Stack</Link>
          <Link to="/career">Career</Link>
          <Link to="/self-care">Self-Care</Link>
        </div> */}
      </div>
    </section>
  );
};

export default PrimaryHeader;
