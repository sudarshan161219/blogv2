import React, { useEffect } from "react";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/Wrappers/SinglePost";
import moment from "moment";
import { Loading } from "../Components/export";
import { BsDot } from "react-icons/bs";
const SinglePost = () => {
  const { getSinglePost, post, isLoading } = useAppContext();
  const { id } = useParams();

  const { _id, title, coverImg, content, createdAt, author } = post;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  useEffect(() => {
    getSinglePost(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="post-heading-container">
        <h1>{title}</h1>
        <div className="post-date-author-info-container">
          <span>{Fdate}</span>
          <BsDot />
          <span>{author ? author.name : null}</span>
        </div>
      </div>

      <div className="post-img-container">
        <img src={coverImg} alt={title} />
      </div>

      <div className="ql-snow post-content-container">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </Wrapper>
  );
};

export default SinglePost;
