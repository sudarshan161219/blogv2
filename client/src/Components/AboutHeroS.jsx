import React from "react";
import Logo from "./Logo";
import Wrapper from "../assets/Wrappers/AboutHeroS";
import {Paragraph} from "../Components/export"
const AboutHeroS = () => {
  return (
    <Wrapper >
      <Logo  />
      <div className="about-info" >
        <Paragraph>A publishing company that focuses <br /> on the essentials.</Paragraph>
      </div>
    </Wrapper>
  );
};

export default AboutHeroS;
