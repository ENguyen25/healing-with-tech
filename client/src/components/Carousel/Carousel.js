import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

import '../../App.css';
import './Carousel.css';

const Carousel = () => {
  const data = useContext(DataContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(data.data.carousel)
  }, [data])

  return !post ? ('') : (
    <section className={window.innerWidth > 600 ? 'container' : ''}>
      <div style={{ backgroundImage: `url(${post.image})` }} className='carousel'>
        <div className="carousel-content">
          <h1>{post.title}</h1>
          <Link to={`/post/${post._id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Carousel