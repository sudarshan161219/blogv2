import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, FeaturedArticle } from "./Components/export";
import { Login, Register } from "./Pages/export";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post:id' element={<FeaturedArticle />} />
      </Routes>
     </>
  )
};

export default App;
