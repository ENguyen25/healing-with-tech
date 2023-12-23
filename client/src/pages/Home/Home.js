import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../../components/Posts/Posts';
import Carousel from '../../components/Carousel/Carousel';

import '../../App.css';
import './Home.css';

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [frontEndPosts, setFrontEndPosts] = useState([]);
  const [backEndPosts, setBackEndPosts] = useState([]);

  const categories = {
    latest: 'Latest',
    frontEnd: 'Front End',
    backEnd: 'Back End'
  };

  useEffect(() => {
    axios
      .get("https://theselfcarecoder.onrender.com:10000/posts")
      .then((postData) => {
        setLatestPosts(postData.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://theselfcarecoder.onrender.com:10000/posts")
      .then((postData) => {
        setFrontEndPosts(postData.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://theselfcarecoder.onrender.com:10000/posts")
      .then((postData) => {
        setBackEndPosts(postData.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className='container'>
      <Carousel />
      <Posts key={1} data={latestPosts} label={categories.latest} />
      <Posts key={2} data={frontEndPosts} label={categories.frontEnd} />
      <Posts key={3} data={backEndPosts} label={categories.backEnd} />
    </section>
  )
}

export default Home