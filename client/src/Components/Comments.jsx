import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/Comments";
import { BsReplyFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import CommentReplyForm from "./CommentReplyForm";
import CommentReplies from "./CommentReplies";
import { useAppContext } from "../context/Context";

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
  } = useAppContext();
  const { _id, content, author, repiles, createdAt, user, likes, dislikes } =
    comment;
  const [reply, setReply] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [postCommentsLikes, setPostCommentsLikes] = useState([]);
  const [postCommentsDisLikes, setPostCommentsDisLikes] = useState([]);
  const { name, userImg } = author;

  const handleReply = () => {
    setReply(!reply);
  };

  useEffect(() => {
    setPostCommentsLikes(likes);
    setPostCommentsDisLikes(dislikes);
    likes.includes(author._id) ? setLike(true) : setLike(false);
    dislikes.includes(author._id) ? setDislike(true) : setDislike(false);
  }, [likes, dislikes]);

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      likeComment(_id);
      unDislikeComment(_id);
    } else {
      unLikeComment(_id);
    }
    if (dislike) {
      setDislike(!dislike);
    }
  };

  const handleDislike = () => {
    setDislike(!dislike);
    if (!dislike) {
      dislikeComment(_id);
      unLikeComment(_id);
    } else {
      unDislikeComment(_id);
    }
    if (like) {
      setLike(!like);
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
              {like ? (
                <BiSolidLike className="ldc-icons" onClick={handleLike} />
              ) : (
                <BiLike className="ldc-icons" onClick={handleLike} />
              )}
              <strong>{postCommentsLikes.length}</strong>
            </div>
            <div className="comment-dislike-container">
              {dislike ? (
                <BiSolidDislike className="ldc-icons" onClick={handleDislike} />
              ) : (
                <BiDislike className="ldc-icons" onClick={handleDislike} />
              )}
              <strong>{postCommentsDisLikes.length}</strong>
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
