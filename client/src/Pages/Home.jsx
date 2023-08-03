import React, { useEffect } from "react";

import { HomePage } from "../Components/export";
import Wrapper from "../assets/Wrappers/Home";
import { useAppContext } from "../context/Context";
import { SkeletonLoding, PageBtnContainer } from "../Components/export";


const Home = () => {
  const { user, getALLPost, allPosts, isLoading, numOfPages, page } =
    useAppContext();

  useEffect(() => {
    getALLPost();
  }, [page, user]);


  return (
    <Wrapper>
      {isLoading ? (
        <SkeletonLoding />
      ) : (
        <>
          {allPosts.map((item) => (
            <HomePage item={item} key={item._id} />
          ))}

          {numOfPages > 1 && <PageBtnContainer />}
        </>
      )}
    </Wrapper>
  );
};

export default Home;
