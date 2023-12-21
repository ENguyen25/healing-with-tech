import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FileBase from 'react-file-base64';
import Markdown from 'react-markdown';

import { styled } from '@mui/material/styles';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { CloudUpload } from '@material-ui/icons';

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

      await axios.post('http://localhost:5000/posts', formData);

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

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Paper>
      <Markdown>{'# Your markdown'}</Markdown>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6"></Typography>
        <TextField name="title" variant="outlined" label="Title" value={title} fullWidth onChange={(e => setTitle(e.target.value))} />
        <TextField name="summary" variant="outlined" label="Summary" value={summary} fullWidth onChange={(e => setSummary(e.target.value))}/>
        <TextField name="content" variant="outlined" label="Content" value={content} fullWidth multiline rows={4} onChange={(e => setContent(e.target.value))}/>
        <Button component="label" variant="contained" startIcon={<CloudUpload />}>
          Upload file
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setImage(base64)} />
        </Button>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={handleClear}>Clear</Button>
      </form>
    </Paper>
    );
};

export default Form;
