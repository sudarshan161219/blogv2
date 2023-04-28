import React, { useEffect } from "react";
import { useAppContext } from "../context/Context";
const AuthorsSinglePost = () => {
  const { getSingleAuthorPost } = useAppContext();
  useEffect(() => {
    getSingleAuthorPost();
  }, []);

  return <div>AuthorsSinglePost</div>;
};

export default AuthorsSinglePost;
