import React from 'react';
import Posts from '../../components/Posts/Posts';
import Carousel from '../../components/Carousel/Carousel';

import '../../App.css';
import './Home.css';

const Home = () => {

  const categories = {
    latest: 'Latest',
    frontEnd: 'Front End',
    backEnd: 'Back End'
  };

  return (
    <section className='container'>
      <Carousel />
      <Posts />
    </section>
  )
}

export default Home