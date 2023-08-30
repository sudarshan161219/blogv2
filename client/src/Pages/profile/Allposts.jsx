import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import {
  AuthorPosts,
  SkeletonLoding,
  PageBtnContainer,
  SearchComponent,
  Heading
} from "../../Components/export";
import Wrapper from "../../assets/Wrappers/Allposts";
import DeletePostAlert from "../../Alert/DeletePostAlert";
const Allposts = () => {
  const {
    numOfPages,
    getAuthorPost,
    authorpost,
    isLoading,
    search,
    sort,
    SearchCategory,
    page,

  } = useAppContext();

  useEffect(() => {
    getAuthorPost()
  }, [search, sort, SearchCategory, page]);



  return (
    <Wrapper>
      <DeletePostAlert />
      <SearchComponent />
      <>
        <Heading className="allPost-heading">
          {authorpost.length === 0 && "no Posts yet"}
          {authorpost.length > 1 ? "Posts" : "Post"} 
        </Heading>
        {isLoading ? (
          <div>
            <SkeletonLoding />
          </div>
        ) : (
          <div className="cards">
            {authorpost.map((item) => (
              <AuthorPosts key={item._id} item={item} />
            ))}
          </div>
        )}
      </>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default Allposts;
