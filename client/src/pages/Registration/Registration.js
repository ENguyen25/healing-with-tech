import React, { useState } from "react";
import axios from 'axios';

const Registration = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('https://theselfcarecoder.onrender.com/auth/register', data)
      console.log('Successfully registered new user!')
    } catch (error) {
      console.error('Error registering new user:', error); 
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={data.username}
            onChange={(e) => setData({...data, username: e.target.value})}
          />
          <input
            type="text"
            value={data.password}
            onChange={(e) => setData({...data, password: e.target.value})}
          />
          <button type="submit">
            Submit
          </button>
        </form>
    </div>
  );
};

export default Registration;
