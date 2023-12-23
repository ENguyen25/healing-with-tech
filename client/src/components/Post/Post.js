import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";

import '../../App.css';
import './Post.css';

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState('');
  const [auth, setAuth] = useState(Cookies.get('token'))

  useEffect(() => {
    axios.get('https://theselfcarecoder.onrender.com:10000/post/' + id)
      .then((postData) => {
        setPost(postData.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="blog-post-page">
      {auth ? <button>Edit</button> : ''}
      <img className="thumbnail-image-page" src={post.image} alt={post.title}></img>
      <div className="blog-post-content">
        <h1 className="post-title-page">{post.title}</h1>
        <p className="post-content-page">{post.content}</p>
      </div>
    </section>
  );
};

export default Post;
