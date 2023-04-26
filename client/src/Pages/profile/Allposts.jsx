import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { AuthorPosts, Loading } from "../../Components/export";
import Wrapper from "../../assets/Wrappers/Allposts";
const Allposts = () => {
  const { getAuthorPost, authorpost, isLoading } = useAppContext();

  useEffect(() => {
    getAuthorPost();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
    <h1>Your Posts</h1>
      {authorpost.map((item) => {
      { return <AuthorPosts key={item._id} item={item} />}
      })}
    </Wrapper>
  );
};

export default Allposts;
