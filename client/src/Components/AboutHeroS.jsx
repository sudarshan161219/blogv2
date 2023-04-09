import React from "react";
import Logo from "./Logo";
import Wrapper from "../assets/Wrappers/AboutHeroS";

const AboutHeroS = () => {
  return (
    <Wrapper >
      <Logo  />
      <div className="about-info" >
        <p>A publishing company that focuses <br /> on the essentials.</p>
      </div>
    </Wrapper>
  );
};

export default AboutHeroS;
