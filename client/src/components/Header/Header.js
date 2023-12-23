import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../App.css";
import "./Header.css";

import logo from '../../images/logo3.png';

const Header = () => {
  const [admin, setAdmin] = useState(null);
  const data = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    setAdmin(localStorage.getItem('token'));
  }, [data])

  return (
    <section>
      <div className="secondary-navbar">
        <div className="secondary-navbar-links">
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div>
          {admin ? (
            <div className="login-link">
              <a onClick={(e) => {
                setAdmin(localStorage.removeItem('token'));
                navigate('/login');
              }}>Logout</a>
              <Link to='/new'>New Post</Link>
            </div>
          )  : <Link to='/login'>Login</Link> }
        </div>
      </div>
      <div className="primary-navbar">
        <div className="primary-navbar-logo">
          <img className="logo" src={logo} alt="Evelyn Nguyen's Learning Blog" />
        </div>
        <div className="primary-navbar-links">
          <Link to='/'>Home</Link>
          <Link to='/latest'>Latest</Link>
          <Link to='/front-end'>Front-End</Link>
          <Link to='/back-end'>Back-End</Link>
          <Link to='/full-stack'>Full-Stack</Link>
          <Link to='/design'>Design</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
