import React from 'react';
import Posts from '../../components/Posts/Posts';

import '../../App.css';
import './Home.css';

const Home = () => {
  return (
    <section className='container'>
      <header>
        <h1>Latest</h1>
        <div className='pinkBorderLine'></div>
      </header>
      <Posts />
    </section>
  )
}

export default Home