import React from "react";
import Wrapper from "../assets/Wrappers/AboutContactS";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import {Paragraph} from "../Components/export"
const AboutContactS = () => {
  return (
    <Wrapper>
      <div className="contact-info">
        <h5>want to connect?</h5>
        <Paragraph>
          Laboris consectetur sunt nulla eiusmod <br /> voluptate eiusmod dolor
          nisi qui..
        </Paragraph>
      </div>
      <div className="socials">
        <ul>
          <li><AiOutlineTwitter className="social-icon"/></li>
          <li><AiFillInstagram  className="social-icon"/></li>
          <li><AiFillLinkedin className="social-icon"/></li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default AboutContactS;
