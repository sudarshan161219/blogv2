import React from "react";
import {
  AboutHeroS,
  AboutS,
  AboutConS,
  AboutContactS,
} from "../Components/export";

const About = () => {
  return (
    <div className="about-container">
      <AboutHeroS />
      <AboutS />
      <AboutConS />
      <AboutContactS />
    </div>
  );
};

export default About;
