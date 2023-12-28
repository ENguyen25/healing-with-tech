import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './Carousel.css';

const Carousel = ({data}) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    setPost(data)
  }, [data])

  return (
    <section style={{ backgroundImage: `url(${post.image})` }} className='carousel'>
      <div className="carousel-content">
        <h1>{post.title}</h1>
        <Link to={`/post/${post._id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </section>
  )
}

export default Carousel