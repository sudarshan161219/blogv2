import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/export";
import {
  Register,
  Home,
  Tags,
  About,
  SinglePost,
  ProtectedRoutes,
  // AuthorsSinglePost,
} from "./Pages/export";
import {
  Profile,
  Dashboard,
  Createpost,
  Allposts,
  EditPage,
  SharedLayout,
  AuthorsSinglePost
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
          <Route path="all-posts" element={<Allposts />} />
          <Route path="edit" element={<EditPage />} />
          <Route path=":id" element={<AuthorsSinglePost />} />
        </Route>

        <Route path="/tags" element={<Tags />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </>
  );
};

export default App;
