import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, ScrolltoTopBtn, Footer } from "./Components/export";
import { useAppContext } from "./context/Context";
import {
  Register,
  Home,
  About,
  SinglePost,
  ProtectedRoutes,
  AuthorPage,
} from "./Pages/export";
import {
  Profile,
  Createpost,
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
      <Navbar />
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/author/:id" element={<AuthorPage />} />

        {/* Protected routes */}
        <Route
          path="/user-profile"
          element={<ProtectedRoutes>{<SharedLayout />}</ProtectedRoutes>}
        >
          <Route index element={<Profile />} />
          {/* <Route index path="profile" element={<Profile />} /> */}
          <Route path="createpost" element={<Createpost />} />
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
