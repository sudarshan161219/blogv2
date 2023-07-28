import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AuthorPosts";
import moment from "moment";
import { CgReadme } from "react-icons/cg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi ";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppContext } from "../context/Context";

const AuthorPosts = ({ item }) => {
  const {  toggleDeletePostModal, setEditPost, deletePost, isLoading, user } = useAppContext();
  const { _id, title, summary, coverImg, createdAt, category, author } = item;

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
         {user._id === author &&   <div className="action-container">
              <Link
                className="Link "
                onClick={() => setEditPost(_id)}
                to={"/user-profile/createpost"}
              >
                <BiEdit className="edit-icon" />
              </Link>
              <Link onClick={() =>  toggleDeletePostModal(_id)} className="Link ">
                <AiOutlineDelete className="delete-icon " />
              </Link>
            </div> }
            <Link className="Link read" to={`/user-profile/${_id}`}>
              Read <HiOutlineArrowNarrowRight className="read-icon" />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthorPosts;
