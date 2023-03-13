import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, FeaturedArticle } from "./Components/export";
import { Login, Register } from "./Pages/export";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3026}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post:id' element={<FeaturedArticle />} />
      </Routes>
    </>
  );
};

export default App;
