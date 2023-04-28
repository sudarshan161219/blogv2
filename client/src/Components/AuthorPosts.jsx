import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AuthorPosts";
import dummyImg from "../assets/imgs/dummy-cover.jpg";
import moment from "moment";
import { useAppContext } from "../context/Context";

const AuthorPosts = ({ item }) => {
  const { setPostId } = useAppContext();
  const { _id, title, summary, coverImg, createdAt, content } = item;
  useEffect(() => {
    setPostId(_id);
  }, []);
  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <Link className="Link authorpost-container" to={`/authorsposts/${_id}`}>
        <div className="image-containner">
          <img src={coverImg} alt="dummyImg" />
        </div>
        <div className="content-container">
          <span>Category</span>
          <h2>{title}</h2>
          <strong>{Fdate}</strong>
          <p>{summary}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default AuthorPosts;
