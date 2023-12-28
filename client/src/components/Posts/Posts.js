import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Posts.css";

const Posts = ({data, label}) => {
  const postData = data;
  const category = label;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postData);
  }, [postData])

  return !posts.length ? (
    ""
  ) : (
    <section className="category-section">
      <div className="post-lineup-header">
        <h5>{category}</h5>
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
