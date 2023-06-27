import React from "react";
import Wrapper from "../assets/Wrappers/CommentForm";
import { useAppContext } from "../context/Context";

const CommentForm = () => {
  const { user } = useAppContext();
  console.log(user);
  return (
    <Wrapper>
      <form>
        <div className="text-img-container">
          <img
            className="desktop-comment-img"
            src={user.userImg}
            alt={user.name}
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
          <button className="button-28 comment-btn">submit</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default CommentForm;
