import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/AuthorPage";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import { AuthorInfoG, AuthorPostsG } from "../Components/export";

const AuthorPage = () => {
  const { getAuthorPage, GauthorPosts, GauthorInfo } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getAuthorPage(id);
  }, [GauthorPosts]);

  return (
    <Wrapper>
      <AuthorInfoG authorInfo={GauthorInfo} />
      {GauthorPosts.map((post) => (
        <AuthorPostsG key={post._id} post={post} />
      ))}
    </Wrapper>
  );
};

export default AuthorPage;
