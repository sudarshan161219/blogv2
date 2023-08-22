import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/AuthorPage";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import { AuthorInfoG, AuthorPostsG } from "../Components/export";
import { Loading, SkeletonLoding } from "../Components/export";


const AuthorPage = () => {
  const { getAuthorPage, GauthorPosts, GauthorInfo, isLoading } =
    useAppContext();
  const { id } = useParams();

  const check = GauthorPosts.length === 0

  useEffect(() => {
    getAuthorPage(id);
  }, [check, id]);




  return (
    <Wrapper>
      {isLoading ? <Loading /> : <AuthorInfoG authorInfo={GauthorInfo} />}
      {isLoading ? (
        <SkeletonLoding />
      ) : (
        <div className="postG">
          <div className="postG-heading-container">
            <h1>{GauthorInfo.name} {GauthorPosts.length > 1 ? "Posts" : "Post"} </h1>
          </div>
          {GauthorPosts.map((post) => (
            <AuthorPostsG key={post._id} post={post} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default AuthorPage;
