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
  }, [check]);


  

  return (
    <Wrapper>
      {isLoading ? <Loading /> : <AuthorInfoG authorInfo={GauthorInfo} />}
      {isLoading ? (
        <SkeletonLoding />
      ) : (
        <div className="postG">
          {GauthorPosts.map((post) => (
            <AuthorPostsG key={post._id} post={post} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default AuthorPage;
