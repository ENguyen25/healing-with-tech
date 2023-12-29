import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../App.css";
import "./Header.css";

const SecondaryHeader = () => {
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
          <Link to='/'>Home</Link>
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
    </section>
  );
};

export default SecondaryHeader;
