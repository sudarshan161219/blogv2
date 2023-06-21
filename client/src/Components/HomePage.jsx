import React from "react";
import Wrapper from "../assets/Wrappers/HomePage";
import moment from "moment";
import { BsPersonCircle } from "react-icons/bs";
import * as sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";
const HomePage = ({ item }) => {
  const { _id, title, coverImg, content, createdAt, author } = item;

  const clean = sanitizeHtml(content, {
    allowedTags: ["p"],
    selfClosing: ["br"],
    disallowedTagsMode: "discard",
  });

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className="card">
        <div className="homepage-img-container">
          <img className="homepage-img" src={coverImg} alt=" articalimg" />
        </div>
        <div className="homepage-info-container">
          <div className="homepage-author-info-container">
            <span>{Fdate} </span>
            <span>
              <BsPersonCircle /> {author.name}
            </span>
          </div>
          <div className="homepage-text-info-container">
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: clean.substring(0, 130) }} />
            <Link className="homepage-link" to={`/post/${_id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
