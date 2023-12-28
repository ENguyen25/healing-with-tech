import React, { useState, useEffect, useContext } from 'react';
import Posts from '../../components/Posts/Posts';
import Carousel from '../../components/Carousel/Carousel';

import { DataContext } from '../../context/DataContext';

import '../../App.css';
import './Home.css';

const Home = () => {
  const data = useContext(DataContext);

  const [latestPosts, setLatestPosts] = useState([]);
  const [frontEndPosts, setFrontEndPosts] = useState([]);
  const [backEndPosts, setBackEndPosts] = useState([]);

  const categories = {
    latest: 'Latest',
    frontEnd: 'Front End',
    backEnd: 'Back End'
  };

  useEffect(() => {
    setLatestPosts(data.data)
    setFrontEndPosts(data.data)
    setBackEndPosts(data.data)
  }, [data]);

  return (
    <section className='container'>
      <Carousel />
      <Posts key={123} data={latestPosts} label={categories.latest} />
      {/* <Posts key={234} data={frontEndPosts} label={categories.frontEnd} />
      <Posts key={345} data={backEndPosts} label={categories.backEnd} /> */}
    </section>
  )
}

export default Home