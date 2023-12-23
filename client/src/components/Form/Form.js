import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FileBase from 'react-file-base64';
import Markdown from 'react-markdown';

const Form = () => {
  
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = {
        'title': title,
        'summary': summary,
        'content': content,
        'image': image
      }

      await axios.post('https://theselfcarecoder.onrender.com:10000/posts', formData);

      console.log(formData)
      console.log('Data and image uploaded successfully');

      navigate('/');
    } catch (error) {
      console.error('Error uploading data and image:', error);
    }
  };

  const handleClear = () => {
    setTitle('')
    setContent('')
    setImage(null)
  }

  return (
    <div>
      <Markdown>{'# Your markdown'}</Markdown>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>
          Upload file
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setImage(base64)} />
        </button>
        <button type="submit">Submit</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </div>
    );
};

export default Form;
