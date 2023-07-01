import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/CommentForm";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import Loading from "../assets/Rolling-0.7s-157px.svg";
const CommentForm = () => {
  const [text, setText] = useState("");
  const { user, createComment, formLoading, getComments } = useAppContext();

  const { id } = useParams();

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.userId = user._id;
    data.postId = id;
    if (!data) {
      toast.error("please provide all values");
    } else {
      createComment(data);
      e.currentTarget.reset();
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
      {user ? (
        <form onSubmit={handleSubmit}>
          <div className="text-img-container">
            <img
              className="desktop-comment-img"
              src={user && user.userImg}
              alt={user && user.name}
            />

            <textarea
              value={text}
              onChange={handleChange}
              placeholder="post your comment"
              name="content"
              id="content"
              className="comment-form"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="img-btn">
            <img
              className="mobile-comment-img"
              src={user.userImg}
              alt={user.name}
              disabled={formLoading}
            />
            <button className="button-28 comment-btn">
              {formLoading ? (
                <img className="giff" src={Loading} alt="" />
              ) : (
                "submit"
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="ldc-disable-msg">
          <strong>
            <Link className="strong-link" to="/register">
              login
            </Link>
            &nbsp; or &nbsp;
            <Link className="strong-link" to="/register">
              sign up
            </Link>
            &nbsp; to like and comment on post
          </strong>
        </div>
      )}
    </Wrapper>
  );
};

export default CommentForm;
