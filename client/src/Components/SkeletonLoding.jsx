import React from "react";
import Wrapper from "../assets/Wrappers/SkeletonLoding";
import { useAppContext } from "../context/Context";

const SkeletonLoding = () => {
  const {light_dark} = useAppContext()
  return (
    <Wrapper className={`SkeletonLoding ${light_dark}`}>
      <div className={`post-card ${light_dark}  loader `}>
        <div className="image"></div>
        <div className="content">
          <h4></h4>
          <div className="description"></div>
        </div>
      </div>

      <div className={`post-card ${light_dark} loader`}>
        <div className="image"></div>
        <div className="content">
          <h4></h4>
          <div className="description"></div>
        </div>
      </div>


      <div className={`post-card ${light_dark} loader`}>
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
