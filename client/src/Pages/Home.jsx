import React, { useEffect } from "react";

import { HomePage } from "../Components/export";
import Wrapper from "../assets/Wrappers/Home";
import { useAppContext } from "../context/Context";
import { SkeletonLoding } from "../Components/export";
// import {getALLPost} from ""
const Home = () => {
  const { getALLPost, allPosts, isLoading } = useAppContext();

  useEffect(() => {
    getALLPost();
  }, [allPosts]);

  const suffule =  allPosts.sort( () => Math.random() - 0.5)

  return (
    <Wrapper>
      {isLoading ? (
        <SkeletonLoding />
      ) : (
        <>
          {suffule.map((item) => (
            <HomePage item={item} key={item._id} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default Home;
