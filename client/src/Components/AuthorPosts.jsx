import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import Wrapper from "../assets/Wrappers/AuthorPosts";
import dummyImg from "../assets/imgs/dummy-cover.jpg";
import moment from "moment";
import { useAppContext } from "../context/Context";

const AuthorPosts = ({ item }) => {
  const { _id, title, summary, coverImg, createdAt} = item;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <Link className="Link authorpost-container" to={`/user-profile/${_id}`}>
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
