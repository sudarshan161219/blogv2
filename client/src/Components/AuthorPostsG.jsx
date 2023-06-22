import React from "react";
import Wrapper from "../assets/Wrappers/AuthorPostsG";
import moment from "moment";
import { Link } from "react-router-dom";


const AuthorPostsG = ({ post }) => {
  const { _id, title, coverImg, content, createdAt } = post;

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
          </div>
          <div className="homepage-text-info-container">
            <h1>{title}</h1>
            <p
              className="ptag"
              dangerouslySetInnerHTML={{ __html: content.substring(0, 130) }}
            ></p>
            <Link className="homepage-link" to={`/post/${_id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthorPostsG;
