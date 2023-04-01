import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home} from "./Components/export";
import { Register, Profile  } from "./Pages/export";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path='/post:id' element={<FeaturedArticle />} /> */}
      </Routes>
    </>
  );
};

export default App;
