import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../App.css";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = {
        title: title,
        summary: summary,
        content: content,
        category: category,
        image: image,
      };

      await axios.post("https://theselfcarecoder.onrender.com/posts", formData);

      console.log(formData);
      console.log("Data and image uploaded successfully");

      navigate("/");
    } catch (error) {
      console.error("Error uploading data and image:", error);
    }
  };

  const handleClear = () => {
    setTitle("");
    setSummary("");
    setContent("");
    setImage("");
  };

  return (
    <>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor='title'>Post Title</label>
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor='excerpt'>Post Excerpt</label>
          <textarea
            type="text"
            placeholder="Enter post excerpt"
            rows='2'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor='content'>Post Content</label>
          <textarea
            type="text"
            placeholder="Enter post content"
            rows='20'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor='category'>Post Category</label>
          <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="Self-Care">Self-Care</option>
            <option value="Career">Career</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor='image'>Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="new-post-buttons">
          <button className="btn btn-lightgray" onClick={handleClear}>Clear</button>
          <button className="btn btn-darkgreen" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
