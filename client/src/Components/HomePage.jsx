import React from "react";
import Wrapper from "../assets/Wrappers/HomePage";
import articalimg from "../assets/Article-Image.png";
import { BsPersonCircle } from "react-icons/bs";
import * as sanitizeHtml from "sanitize-html";


const HomePage = ({ item }) => {
  const { title, coverImg, content, category, createdAt, author } = item;


const clean = sanitizeHtml(content, {
  allowedTags: ["p"],
  selfClosing: [
    "br",
  ],
  disallowedTagsMode: "discard",
});

  return (
    <Wrapper>
      <div className="card">
        <div className="homepage-img-container">
          <img className="homepage-img" src={coverImg} alt=" articalimg" />
        </div>
        <div className="homepage-info-container">
          <div className="homepage-author-info-container">
            <span>AUGUST 13, 2021 </span>
            <span>
              <BsPersonCircle /> {author.name}
            </span>
          </div>
          <div className="homepage-text-info-container">
            <h1>{title}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: clean.substring(0, 130) }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
