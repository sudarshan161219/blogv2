import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/AuthorPage";
import { useAppContext } from "../context/Context";
import { useParams } from "react-router-dom";
import { Loading, SkeletonLoding, AuthorInfoG,  CardComponent, Heading} from "../Components/export";
import ProfileAuthorPage from "../Pages/profile/ProfileAuthorPage"

const AuthorPage = () => {
  const { getAuthorPage, GauthorPosts, GauthorInfo, isLoading, light_dark, user } =
    useAppContext();
  const { id } = useParams();

  // const check = GauthorPosts.length === 0

  useEffect(() => {
    getAuthorPage(id);
  }, [id]);

  return (
    <Wrapper className={`AuthorPage ${light_dark}`}>
      {isLoading ? <Loading /> : <AuthorInfoG authorInfo={GauthorInfo} />}
      {isLoading ? (
        <SkeletonLoding />
      ) : (
        <div className={`postG ${light_dark}`}>
          <div className="postG-heading-container">
            <Heading>{GauthorInfo.name} {GauthorPosts.length > 1 ? "Posts" : "Post"} </Heading>
          </div>
          {GauthorPosts.map((post) => (
            <CardComponent key={post._id} item={post} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default AuthorPage;
