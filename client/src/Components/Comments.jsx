import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/Comments";
import { BsReplyFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import CommentReplyForm from "./CommentReplyForm";
import CommentReplies from "./CommentReplies";
import { useAppContext } from "../context/Context";

const Comments = ({ comment, idx }) => {
  const {
    isLoading,
    likeComment,
    unLikeComment,
    commentLike,
    commentDislike,
    toggleCommentLikeBtn,
    toggleCommentDisLikeBtn,
    post,
  } = useAppContext();
  const [reply, setReply] = useState(false);
  const { _id, content, author, repiles, createdAt } = comment;
  const { comments } = post;
  const { name, userImg } = author;

  let arr;



  const handleReply = () => {
    setReply(!reply);
  };

  const handleLike = (e) => {
    if (comments) {
      for (let index = 0; index < comments.length; index++) {
        const element = comments[idx];
        arr = element;
      }
    }

    if(arr._id.includes(_id)){
      // toggleCommentLikeBtn();
      console.log(_id);
    }else{
      // !toggleCommentLikeBtn();
      console.log(_id);
    }



    // console.log(_id ===);
    // if (!commentLike) {
    //   likeComment(_id);
    //   // disunLikePost(id);
    // } else {
    //   unLikeComment(_id);
    // }
    // if (commentDislike) {
    //   !toggleDisLikeBtn();
    // }
  };

  const handleDislike = () => {
    // toggleCommentDisLikeBtn();
    // if (!commentDislike) {
    //   dislikePost(id);
    //   unLikePost(id);
    // } else {
    //   disunLikePost(id);
    // }
    // if (commentLike) {
    //   !toggleLikeBtn();
    // }
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
              {commentLike ? (
                <BiSolidLike className="ldc-icons" onClick={handleLike} />
              ) : (
                <BiLike className="ldc-icons" onClick={handleLike} />
              )}
              <strong>25</strong>
            </div>
            <div className="comment-dislike-container">
              {commentDislike ? (
                <BiSolidDislike className="ldc-icons" onClick={handleDislike} />
              ) : (
                <BiDislike className="ldc-icons" onClick={handleDislike} />
              )}
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
