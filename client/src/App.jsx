import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/export";
import {
  Register,
  Profile,
  Home,
  Dashboard,
  Createpost,
  Tags,
  About,
} from "./Pages/export";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        {/* Protected routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createpost" element={<Createpost />} />

        <Route path="/tags" element={<Tags />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
