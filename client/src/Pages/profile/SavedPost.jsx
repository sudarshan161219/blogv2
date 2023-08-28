import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { SavedPosts, SkeletonLoding, CardComponent } from "../../Components/export";
import Wrapper from "../../assets/Wrappers/CardComponent"
const SavedPost = () => {
  const { getSavedPost,savedPosts, isLoading } = useAppContext();
  useEffect(() => {
getSavedPost() 
  }, []);
  return (
    <>
          <h1 className="allPost-heading">
        {savedPosts.length === 0 ? "no Saved Posts yet" : "your Saved Posts"}
      </h1>
    
        <Wrapper>
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
    </Wrapper>
    </>
  );

};

export default SavedPost;
