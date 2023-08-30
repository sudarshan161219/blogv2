import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { SkeletonLoding, CardComponent, Heading } from "../../Components/export";

import Wrapper from "../../assets/Wrappers/SavedPost"


const SavedPost = () => {
  const { getSavedPost, savedPosts, isLoading } = useAppContext();
  useEffect(() => {
    getSavedPost()
  }, []);
  return (
    < Wrapper>
      <Heading className="allPost-heading">
        {savedPosts.length === 0 ? "no Saved Posts yet" : "your Saved Posts"}
      </Heading>
      {isLoading ? (
        <div>
          <SkeletonLoding />
        </div>
      ) : (
        <div >
          {savedPosts.map((item) => (
            <CardComponent key={item._id} item={item} />
          ))}
        </div>
      )}
    </ Wrapper>
  );

};

export default SavedPost;
