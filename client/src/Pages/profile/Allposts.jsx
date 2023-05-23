import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/Context";
import {
  AuthorPosts,
  Loading,
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
    page
  } = useAppContext();
  const [arr, setArr] = useState(authorpost);

  useEffect(() => {
    setArr(authorpost);
    getAuthorPost();
  }, [arr, search, sort, SearchCategory, page]);

  return (
    <Wrapper>
      <SearchComponent />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>{authorpost.length === 0 ? "no Post" : "your Posts"}</h1>
          <div className="card">
            {authorpost.map((item) => (
              <AuthorPosts key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default Allposts;
