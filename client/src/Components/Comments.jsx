import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/Comments";
import { BsReplyFill } from "react-icons/bs";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import CommentReplyForm from "./CommentReplyForm";
import CommentReplies from "./CommentReplies";

const Comments = ({ comment }) => {
  const [reply, setReply] = useState(false);
  const { content, author, repiles, createdAt } = comment;
  const { name, userImg } = author;

  const handleReply = () => {
    setReply(!reply);
  };

  return (
    <Wrapper>
      <div className="comment-container">
        <div className="comment-info-container">
          <div className="comment-name-time-reply">
            <div className="comment-img-name">
              <img className="mobile-comment-img" src={userImg} alt={name} />
              <strong>{name}</strong>
            </div>
            <div onClick={handleReply} className="icon-container">
              <BsReplyFill className="reply-icon" />
              <strong>reply</strong>
            </div>
          </div>
          <div className="comment-content">
            <p>{content}</p>
          </div>

          <div className="comment-like-dislike-container">
            <div className="comment-like-container">
              {/* {like ? (
                    <BiSolidLike className="ldc-icons" onClick={handleLike} />
                  ) : (
                    <BiLike className="ldc-icons" onClick={handleLike} />
                  )} */}
              <BiLike className="comment-icons" />
              <strong>25</strong>
            </div>
            <div className="comment-dislike-container">
              {/* {dislike ? (
                    <BiSolidDislike
                      className="ldc-icons"
                      onClick={handleDislike}
                    />
                  ) : (
                    <BiDislike className="ldc-icons" onClick={handleDislike} />
                  )} */}
              <BiDislike className="comment-icons" />
              <strong>10</strong>
            </div>
          </div>
        </div>

        {/* //$conditional rendring */}
        {reply && <CommentReplyForm />}
        <div className="comment-replies">
          {repiles.length > 0 && <CommentReplies />}
        </div>
      </div>
    </Wrapper>
  );
};

export default Comments;
