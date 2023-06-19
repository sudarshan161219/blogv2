import React from "react";
import Wrapper from "../assets/Wrappers/HomePage";
import articalimg from "../assets/Article-Image.png";
import { BsPersonCircle } from "react-icons/bs";


const HomePage = () => {
  return (
    <Wrapper>
      <div className="card">
        <div className="homepage-img-container">
          <img className="homepage-img" src={articalimg} alt=" articalimg" />
        </div>
        <div className="homepage-info-container">
          <div className="homepage-author-info-container">
            <span>AUGUST 13, 2021 </span>
            <span>< BsPersonCircle /> Sudarshan</span>
          </div>
          <div className="homepage-text-info-container">
            <h1>World’s Most Dangerous Technology Ever Made.</h1>
            <p>
              Proident aliquip velit qui commodo officia qui consectetur dolor
              ullamco aliquip elit incididunt. Ea minim ex consectetur
              excepteur.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
