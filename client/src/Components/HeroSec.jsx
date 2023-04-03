import React from "react";
import articalimg from "../assets/Article-Image.png";
import "./HeroSec.css";

const HeroSec = () => {
  return (
    <div className="content-container">
      <img className="hero-img" src={articalimg} alt="img" />
      <div className="hero-img-content">
        <span className="span-fi">FEATURED ARTICLE</span>
        <h1 className="hero-heading" >World’s Most Dangerous Technology Ever Made.</h1>
        <div className="meta">
          <span className="span-se">Ralph Hawkins</span>
          <span className="span-th">/</span>
          <span className="span-fo">May 7, 2019 (10 mins read)</span>
        </div>
        <p className="hero-para">
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </p>
      </div>
    </div>
  );
};

export default HeroSec;
