import React, { useState, useEffect, useContext } from 'react';
import Posts from '../../components/Posts/Posts';
import Carousel from '../../components/Carousel/Carousel';

import { DataContext } from '../../context/DataContext';

import '../../App.css';
import './Home.css';

const Home = () => {
  const data = useContext(DataContext);

  const [latestPosts, setLatestPosts] = useState([]);
  const [carouselPosts, setCarouselPosts] = useState([]);

  const categories = {
    latest: 'Latest',
    frontEnd: 'Front End',
    backEnd: 'Back End'
  };

  useEffect(() => {
    setLatestPosts(data.data.postData);
    setCarouselPosts(data.data.carousel);
  }, [data]);

  return (
    <section className='container'>
      {carouselPosts ? (<Carousel key={234} data={carouselPosts} />) : ''}
      {latestPosts ? (<Posts key={123} data={latestPosts} label={categories.latest} />) : ''}
    </section>
  )
}

export default Home