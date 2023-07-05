import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import Wrapper from "../assets/Wrappers/CommentReplyForm";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loading from "../assets/Rolling-0.7s-157px.svg";
const CommentReplyForm = ({ name, commentId }) => {
  const { user, createCommentReply, commentsReplyformLoading } =
    useAppContext();
  const [text, setText] = useState(`@${name}  `);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.commentId = commentId;
    data.userId = user._id;
    data.postId = id;
    data.parentCommentId = commentId;
    if (!data) {
      toast.error("please provide all values");
    } else {
      createCommentReply(data);
      e.currentTarget.reset();
      setText("");
    }
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
            name="Rcontent"
            id="Rcontent"
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
          <button className="button-28 comment-btn">
            {commentsReplyformLoading ? (
              <img className="giff" src={Loading} alt="" />
            ) : (
              "reply"
            )}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default CommentReplyForm;
