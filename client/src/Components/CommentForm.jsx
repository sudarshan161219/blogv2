import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/CommentForm";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
const CommentForm = () => {
  const [text, setText] = useState("");
  const { user } = useAppContext();

  const { id } = useParams();

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.userId = user._id;
    data.postId = id;
   console.log(data);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
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
          />
          <button className="button-28 comment-btn">submit</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default CommentForm;
