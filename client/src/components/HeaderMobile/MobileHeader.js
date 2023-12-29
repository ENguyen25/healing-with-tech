import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../images/logo3.png";

import "./MobileHeader.css";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
}

  return (
    <>
      <div className="mobile-header">
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          onClick={ToggleSidebar}
        />
        <img
          className="logo-mobile"
          src={logo}
          alt="The Self-Care Coder: A Programmer's Path to Well-Being"
        />
      </div>
      <div className={isOpen ? "sidebar active" : "sidebar"}>
        <div className="sidebar-links">
          <FontAwesomeIcon
            icon="fa-solid fa-x"
            onClick={ToggleSidebar}
          />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="divider"></div>
          <Link to="/latest">Latest</Link>
          <Link to="/front-end">Front-End</Link>
          <Link to="/back-end">Back-End</Link>
          <Link to="/full-stack">Full-Stack</Link>
          <Link to="/career">Career</Link>
          <Link to="/self-care">Self-Care</Link>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
