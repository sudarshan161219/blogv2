import React from 'react'
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import Wrapper from '../assets/Wrappers/CommentReplyForm';

const CommentReplyForm = () => {
    const { user } = useAppContext();

    if (!user) {
      return <Navigate to="/" />;
    }

  return (
    <Wrapper>
      <form>
        <div className="text-img-container">
          <img
            className="desktop-comment-img"
            src={user && user.userImg}
            alt={user && user.name}
          />

          <textarea
            placeholder="post your comment"
            name=""
            id=""
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
          <button className="button-28 comment-btn">reply</button>
        </div>
      </form>
    </Wrapper>
  )
}

export default CommentReplyForm