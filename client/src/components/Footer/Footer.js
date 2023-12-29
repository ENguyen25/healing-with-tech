import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <div className="footer-links">
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/career'>Career</Link>
        <Link to='/self-care'>Self-Care</Link>
      </div>
      <div className="social-media-links"></div>
      <p className="copyright">&copy; 2023 <span>Evelyn Nguyen</span>, All Rights Reserved</p>
    </section>
  )
}

export default Footer