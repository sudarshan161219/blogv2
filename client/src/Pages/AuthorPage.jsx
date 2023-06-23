import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/AuthorPage";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import { AuthorInfoG, AuthorPostsG } from "../Components/export";
import { Loading } from "../Components/export";
const AuthorPage = () => {
  const { getAuthorPage, GauthorPosts, GauthorInfo, isLoading } =
    useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getAuthorPage(id);
  }, [GauthorPosts]);

  // if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <AuthorInfoG authorInfo={GauthorInfo} />
      <div className="postG">
        {GauthorPosts.map((post) => (
          <AuthorPostsG key={post._id} post={post} />
        ))}
      </div>
    </Wrapper>
  );
};

export default AuthorPage;
