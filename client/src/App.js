import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DataProvider } from "./context/DataContext";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home/Home";
import NewPost from "./pages/NewPost/NewPost";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SecondaryHeader from "./components/HeaderDesktop/SecondaryHeader";
import MobileHeader from "./components/HeaderMobile/MobileHeader";
import Post from "./components/Post/Post";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        {window.innerWidth > 600 ? <SecondaryHeader /> : <MobileHeader />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<MainLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
