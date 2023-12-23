import React from 'react';

import './Carousel.css';

import bluelandscape from '../../images/bluelandscape.jpg';

const Carousel = () => {
  return (
    <section className='carousel'>
        <img src={bluelandscape} alt="blue landscape" />
    </section>
  )
}

export default Carousel