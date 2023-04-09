import React from "react";
import {
  AboutHeroS,
  AboutS,
  AbooutConclusionS,
  AboutContactS,
} from "../Components/export";

const About = () => {
  return (
    <div className="about-container">
      <AboutHeroS />
      <AboutS />
      {/* <AbooutConclusionS />
      <AboutContactS /> */}
    </div>
  );
};

export default About;
