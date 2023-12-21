import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState('');
  const [auth, setAuth] = useState(Cookies.get('token'))

  useEffect(() => {
    axios.get('http://localhost:5000/post/' + id)
      .then((postData) => {
        console.log(postData.data)
        setPost(postData.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {auth ? <button>Edit</button> : ''}
      <img src={post.image} alt={post.title}></img>
      <h1>{post.title}</h1>
      <h2>{post.summary}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
