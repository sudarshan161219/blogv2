import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { AuthorPosts, Loading } from "../../Components/export";

const Allposts = () => {
  const { getAuthorPost, authorpost, isLoading } = useAppContext();
  useEffect(() => {
    getAuthorPost();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {authorpost.map((item) => {
        return <AuthorPosts item={item} />;
      })}
    </>
  );
};

export default Allposts;
