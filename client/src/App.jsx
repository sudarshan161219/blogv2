import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/export";
import { Register, Home, Tags, About, ProtectedRoutes } from "./Pages/export";
import {
  Profile,
  Dashboard,
  Createpost,
  SharedLayout,
} from "./Pages/profile/export";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/user-profile"
          element={<ProtectedRoutes>{<SharedLayout />}</ProtectedRoutes>}
        >
          {/* Protected routes */}
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="createpost" element={<Createpost />} />
        </Route>

        <Route path="/tags" element={<Tags />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
