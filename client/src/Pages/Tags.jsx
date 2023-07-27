import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/Tags";
import { BsSearch } from "react-icons/bs";
import tagArr from "../utils/tagArr";
import { SearchComponent } from "../Components/export";
import { useAppContext } from "../context/Context";
import { HomePage, SkeletonLoding } from "../Components/export";
import WrapperR from "../assets/Wrappers/Home";

const Tags = () => {
  const {
    isLoading,
    getTagSearchPost,
    searchT,
    sortT,
    SearchCategoryT,
    pageT,
    postg,
  } = useAppContext();

  useEffect(() => {
    if (searchT !== "") {
      getTagSearchPost();
    } else if (sortT !== "") {
      getTagSearchPost();
    } else if (SearchCategoryT !== "") {
      getTagSearchPost();
    }
  }, [searchT, sortT, SearchCategoryT, pageT]);

  return (
    <Wrapper>
      <div className="search-container">
        <SearchComponent />
      </div>
      <Wrapper>
        {isLoading ? (
          <SkeletonLoding />
        ) : (
          <>
            {postg.map((item) => (
              <HomePage item={item} key={item._id} />
            ))}
          </>
        )}
      </Wrapper>
    </Wrapper>
  );
};

export default Tags;
