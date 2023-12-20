import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Admin from './components/Admin/Admin';
import NewPost from './pages/NewPost/NewPost';
import Header from './components/Header/Header';
import Post from './components/Posts/Post/Post';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/post/:id" element={<Post />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;