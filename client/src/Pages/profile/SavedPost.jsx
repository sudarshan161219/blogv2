import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { SavedPosts, SkeletonLoding } from "../../Components/export";
import Wrapper from "../../assets/Wrappers/Allposts"
const SavedPost = () => {
  const { getSavedPost, token, savedPosts, isLoading } = useAppContext();
  useEffect(() => {
    token !== "" ? getSavedPost() : null;
  }, [token]);
  return (
    <Wrapper>
      <h1 className="allPost-heading">
        {savedPosts.length === 0 ? "no Saved Posts yet" : "your Saved Posts"}
      </h1>
      {isLoading ? (
        <div>
          <SkeletonLoding />
        </div>
      ) : (
        <div className="card">
          {savedPosts.map((item) => (
            <SavedPosts key={item._id} item={item} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default SavedPost;
