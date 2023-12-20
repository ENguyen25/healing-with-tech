import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress, Grid } from '@mui/material';
import axios from "axios";

import './Posts.css';

const Posts = () => {

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then((postData) => {
        console.log(postData.data)
        setAllPosts(postData.data)
      })
      .catch((error) => console.log(error))
  }, [])
  
  return (
    !allPosts.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {allPosts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6}>
            <div>
              <img className="thumbnailImage" src={post.image} alt={post.title} />
              <div>
                <Link to={`/post/${post._id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p>{post.summary}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
