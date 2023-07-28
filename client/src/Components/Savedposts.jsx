import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/SavedPosts";
import moment from "moment";
import { HiOutlineArrowNarrowRight } from "react-icons/hi ";
import { useAppContext } from "../context/Context";
const Savedposts = ({item}) => {
  const { toggleDeletePostModal, setEditPost, deletePost, isLoading, user } =
    useAppContext();
  const { _id, title, summary, coverImg, createdAt, category} = item;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <div className="authorpost-container">
        <div className="image-containner">
          <img src={coverImg} alt="dummyImg" loading="lazy" />
        </div>
        <div className="content-container">
          <div className="authorpost-author-info-container">
            <span>{Fdate}</span>
            <span>{category}</span>
          </div>

          <div className="authorpost-text-info-container">
            <h1>{title}</h1>
          </div>

          <div className="action-link-container">
            <Link className="Link read" to={`/user-profile/saved-s-post/${_id}`}>
              Read <HiOutlineArrowNarrowRight className="read-icon" />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Savedposts;
