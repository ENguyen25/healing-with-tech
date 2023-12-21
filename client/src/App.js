import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import NewPost from './pages/NewPost/NewPost';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Header from './components/Header/Header';
import Post from './components/Posts/Post/Post';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/post/:id" element={<Post />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
