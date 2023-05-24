import React from "react";
import Wrapper from "../assets/Wrappers/SkeletonLoding";
const SkeletonLoding = () => {
  return (
    <Wrapper>
      <div className="post-card loader">
        <div className="image"></div>
        <div className="content">
          <h4></h4>
          <div className="description"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SkeletonLoding;
