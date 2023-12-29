import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from '../../context/DataContext';

import "./Posts.css";

const Posts = () => {
  const postData = useContext(DataContext);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setPosts(postData.data.postData);
  }, [postData])

  return !posts ? (
    ""
  ) : (
    <section className="container category-section">
      <div className="post-lineup-header">
        <h5>Latest</h5>
      </div>
      <div className="post-lineup">
        {posts.map((post) => (
          <div className="post-card">
            <img className="thumbnail-image" src={post.image} alt={post.title} />
            <div className="post-content">
              <Link to={`/post/${post._id}`}>
                <h2 className="post-title">{post.title}</h2>
              </Link>
              <p className="category-tag"></p>
              <p className="post-summary">{post.summary}</p>
              <p className="date-created"></p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Posts;
