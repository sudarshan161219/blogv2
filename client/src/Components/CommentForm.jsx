import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/CommentForm";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import Loading from "../assets/Rolling-0.7s-157px.svg";
import profile from "../assets/imgs/profile.png";
const CommentForm = () => {
  const [text, setText] = useState("");
  const { user, createComment, formLoading, light_dark } = useAppContext();

  const { id } = useParams();

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
        <form className={`commentForm ${light_dark}`} onSubmit={handleSubmit}>
          <div className="text-img-container">
            <img
              className={`desktop-comment-img ${light_dark}`}
              src={user.userImg ? user.userImg : profile}
              alt={user && user.name}
            />

            <textarea
              value={text}
              onChange={handleChange}
              placeholder="post your comment"
              name="content"
              id="content"
              className={`comment-input ${light_dark}`}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="img-btn">
            <img
              className={`mobile-comment-img ${light_dark}`}
              src={user.userImg ? user.userImg : profile}
              alt={user && user.name}
              disabled={formLoading}
            />
            <button className="button-4 comment-btn">
              {formLoading ? (
                <img className="giff" src={Loading} alt="" />
              ) : (
                "submit"
              )}
            </button>
          </div>
        </form>
    </Wrapper>
  );
};

export default CommentForm;
