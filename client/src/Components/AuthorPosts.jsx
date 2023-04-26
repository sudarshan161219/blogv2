import React from "react";
import Wrapper from "../assets/Wrappers/AuthorPosts";
import dummyImg from "../assets/imgs/dummy-cover.jpg";
import moment from "moment";

const AuthorPosts = ({ item }) => {

  const { title, summary, coverImg, createdAt, content } = item;
  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className="image-containner">
        <img src={coverImg} alt="dummyImg" />
      </div>
      <div className="content-container">
        <span>Category</span>
        <h2>{title}</h2>
        <strong>{Fdate}</strong>
        <p>{summary}</p>
      </div>
    </Wrapper>
  );
};

export default AuthorPosts;
