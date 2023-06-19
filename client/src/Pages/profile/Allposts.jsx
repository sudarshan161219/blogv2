import React, { useEffect} from "react";
import { useAppContext } from "../../context/Context";
import {
  AuthorPosts,
  SkeletonLoding,
  PageBtnContainer,
  SearchComponent,
} from "../../Components/export";
import Wrapper from "../../assets/Wrappers/Allposts";

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
    // getTagSearchPost,
  } = useAppContext();

  useEffect(() => {
    getAuthorPost();
  }, [ search, sort, SearchCategory, page]);

  return (
    <Wrapper>
      <SearchComponent />
      <>
        <h1 className="allPost-heading">{authorpost.length === 0 ? "no Posts yet" : "your Posts"}</h1>
        {isLoading ? (
          <div>
            <SkeletonLoding />
          </div>
        ) : (
          <div className="card">
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
