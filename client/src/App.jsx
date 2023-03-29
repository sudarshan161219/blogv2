import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home} from "./Components/export";
import { Login, Register } from "./Pages/export";
// import ToastAlert from "./Alert/ToastAlert";


const App = () => {
  return (
    <>
    {/* <ToastAlert /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/register' element={<Register />} />
        {/* <Route path='/post:id' element={<FeaturedArticle />} /> */}
      </Routes>
    </>
  );
};

export default App;
