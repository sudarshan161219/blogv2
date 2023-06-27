import React from "react";
import Wrapper from "../assets/Wrappers/CommentForm";
const CommentForm = () => {
  return (
    <Wrapper>
      <form>
        <textarea
          placeholder="post your comment"
          name=""
          id=""
          className="comment-form"
          cols="30"
          rows="10"
        ></textarea>
        <button className="button-28 comment-btn">submit</button>
      </form>
    </Wrapper>
  );
};

export default CommentForm;
