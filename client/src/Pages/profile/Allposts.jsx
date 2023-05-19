import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/Context";
import { AuthorPosts, Loading } from "../../Components/export";
import Wrapper from "../../assets/Wrappers/Allposts";
import SearchComponent from "../../Components/SearchComponent";
const Allposts = () => {
  const { getAuthorPost, authorpost, isLoading, search, sort, category } =
    useAppContext();
  const [arr, setArr] = useState(authorpost);

  useEffect(() => {
    setArr(authorpost);
    getAuthorPost();
  }, [arr, search, sort, category]);

  // if () {
  //   return <Loading />;
  // }
  return (
    <Wrapper>
      <SearchComponent />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>{authorpost.length === 0 ? "no Post" : "your Posts"}</h1>
          <div>
            {authorpost.map((item) => (
              <AuthorPosts key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Allposts;
