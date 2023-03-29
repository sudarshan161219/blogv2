import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home} from "./Components/export";
import { Register } from "./Pages/export";



const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/post:id' element={<FeaturedArticle />} /> */}
      </Routes>
    </>
  );
};

export default App;
