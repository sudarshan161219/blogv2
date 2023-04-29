import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AuthorPosts";
import moment from "moment";
import { CgReadme } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
const AuthorPosts = ({ item }) => {
  const { _id, title, summary, coverImg, createdAt } = item;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className=" authorpost-container">
        <div className="image-containner">
          <img src={coverImg} alt="dummyImg" />
        </div>
        <div className="content-container">
          <span>Category</span>
          <h2>{title}</h2>
          <strong>{Fdate}</strong>
          <p>{summary}</p>
          <div className="action-link-container">
            <div className="action-container">
              <Link className="Link " to={"/user-profile/createpost"}>
                <BiEdit className="edit-icon" />
              </Link>
              <Link className="Link ">
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
