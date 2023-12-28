import React from 'react';

import Form from '../../components/Form/Form';

import "../../App.css";

const NewPost = () => {
  return (
    <div className="container">
      <h1 className='page-header'>Create a New Post</h1>
      <Form />
    </div>
  )
}

export default NewPost