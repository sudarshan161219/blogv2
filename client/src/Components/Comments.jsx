import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/Comments";
import { BsReplyFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import CommentReplyForm from "./CommentReplyForm";
import CommentReplies from "./CommentReplies";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";

const Comments = ({ comment }) => {
  const {
    isLoading,
    likeComment,
    unLikeComment,
    dislikeComment,
    unDislikeComment,
    commentLike,
    commentDislike,
    toggleCommentLikeBtn,
    toggleCommentDisLikeBtn,
    post,
    postCommentsLikes,
    postCommentsDisLikes,
    comments,
    user,
    paisaId
  } = useAppContext();

  const { _id, content, author, repiles, createdAt, likes, dislikes } = comment;

  const [reply, setReply] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const { name, userImg } = author;

  // let newArr;
  // comments.map((item) => (newArr = item));

  const handleReply = () => {
    setReply(!reply);
  };

  useEffect(() => {
    if (likes.includes(user._id)) {
      setLike(!like);
    }
    if (dislikes.includes(user._id)) {
      setDislike(!dislike);
    }

  }, []);

  const handleLike = () => {
    if (!like) {
      likeComment(_id);
      unDislikeComment(_id);
    } else {
      unLikeComment(_id);
    }
    if (dislike) {
      setDislike(!dislike);
    }

    if (paisaId._id === _id && paisaId.likes.includes(user._id)) {
      unLikeComment(_id);
      setLike(!like);
    } else {
      setLike(!like);
    }

  };

  const handleDislike = () => {
    if (!dislike) {
      dislikeComment(_id);
      unLikeComment(_id);
    } else {
      unDislikeComment(_id);
    }
    if (like) {
      setLike(!like);
    }

    if (dislikes.includes(user._id)) {
      unDislikeComment(_id);
      setDislike(!dislike);
    } else {
      setDislike(!dislike);
    }
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
              {paisaId._id === _id && paisaId.likes.includes(user._id) ? (
                    <BiSolidLike className="ldc-icons" onClick={handleLike} />
              ) : (
                <>
                  {like ? (
                    <BiSolidLike className="ldc-icons" onClick={handleLike} />
                  ) : (
                    <BiLike className="ldc-icons" onClick={handleLike} />
                  )}
                </>
              )}
              {postCommentsLikes.map((item) => (
                <strong key={item._id}>{item._id === _id && item.count}</strong>
              ))}
            </div>
            <div className="comment-dislike-container">
              {dislikes.includes(user._id) ? (
                <>
                  <BiSolidDislike
                    className="ldc-icons"
                    onClick={handleDislike}
                  />
                </>
              ) : (
                <>
                  {dislike ? (
                    <BiSolidDislike
                      className="ldc-icons"
                      onClick={handleDislike}
                    />
                  ) : (
                    <BiDislike className="ldc-icons" onClick={handleDislike} />
                  )}
                </>
              )}
              {postCommentsDisLikes.map((item) => (
                <strong key={item._id}>{item._id === _id && item.count}</strong>
              ))}
            </div>

            {/* {user._id === author._id && "delete and Edit" } */}
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
