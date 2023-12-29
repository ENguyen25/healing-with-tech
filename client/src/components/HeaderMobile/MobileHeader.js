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
          <Link onClick={ToggleSidebar} to="/">Home</Link>
          <Link onClick={ToggleSidebar} to="/about">About</Link>
          <Link onClick={ToggleSidebar} to="/contact">Contact</Link>
          {/* <div className="divider"></div>
          <Link onClick={ToggleSidebar} to="/latest">Latest</Link>
          <Link onClick={ToggleSidebar} to="/front-end">Front-End</Link>
          <Link onClick={ToggleSidebar} to="/back-end">Back-End</Link>
          <Link onClick={ToggleSidebar} to="/full-stack">Full-Stack</Link>
          <Link onClick={ToggleSidebar} to="/career">Career</Link>
          <Link onClick={ToggleSidebar} to="/self-care">Self-Care</Link> */}
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
