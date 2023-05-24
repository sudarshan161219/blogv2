import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AuthorPosts";
import moment from "moment";
import { CgReadme } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppContext } from "../context/Context";

const AuthorPosts = ({ item }) => {
  const { setEditPost, deletePost, isLoading } = useAppContext();
  const { _id, title, summary, coverImg, createdAt, category } = item;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className= "authorpost-container">
        <div className="image-containner">
          <img src={coverImg} alt="dummyImg" />
          <strong className="strong">{Fdate}</strong>
        </div>
        <div className="content-container">
          <span>{category}</span>
          <h2>{title.length > 10 ? title.slice(0, 30) + "..." : null}</h2>
          <div className="action-link-container">
            <div className="action-container">
              <Link
                className="Link "
                onClick={() => setEditPost(_id)}
                to={"/user-profile/createpost"}
              >
                <BiEdit className="edit-icon" />
              </Link>
              <Link onClick={() => deletePost(_id)} className="Link ">
                <AiOutlineDelete className="delete-icon " />
              </Link>
            </div>
            <Link
              className="Link read-btn button-28"
              to={`/user-profile/${_id}`}
            >
              Read <CgReadme className="read-icon" />
            </Link>
          </div>
        </div>
      </div>

    </Wrapper>
  );
};

export default AuthorPosts;
