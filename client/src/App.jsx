import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, ScrolltoTopBtn, Footer } from "./Components/export";
import { useAppContext } from "./context/Context";
import {
  Register,
  Home,
  Tags,
  About,
  SinglePost,
  ProtectedRoutes,
  AuthorPage,
  // AuthorsSinglePost,
} from "./Pages/export";
import {
  Profile,
  Dashboard,
  Createpost,
  Allposts,
  EditPage,
  SharedLayout,
  AuthorsSinglePost,
  SavedPost,
  SavedSinglePost,

} from "./Pages/profile/export";
import { Sidebar } from "./Components/export"
import { Toaster } from "react-hot-toast";
const App = () => {
  const { isLoading, light_dark } = useAppContext()
  return (
    <div className={`main ${light_dark}`}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/tags" element={<Tags />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/author/:id" element={<AuthorPage />} />

        {/* Protected routes */}
        <Route
          path="/user-profile"
          element={<ProtectedRoutes>{<SharedLayout />}</ProtectedRoutes>}
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="createpost" element={<Createpost />} />
          {/* <Route path="author-post" element={<Allposts />} /> */}
          <Route path="edit" element={<EditPage />} />
          <Route path=":id" element={<AuthorsSinglePost />} />
          <Route path="savedpost" element={<SavedPost />} />
          <Route path="saved-s-post/:id" element={<SavedSinglePost />} />
        </Route>
      </Routes>
      <ScrolltoTopBtn />
      {isLoading ? null : <Footer />}
    </div>
  );
};

export default App;
