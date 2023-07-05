import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/Comments";
import { BsReplyFill } from "react-icons/bs";
import { BiEdit, BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import CommentReplyForm from "./CommentReplyForm";
import CommentReplies from "./CommentReplies";
import { useAppContext } from "../context/Context";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Ripples from "react-ripples";

const Comments = ({ comment }) => {
  const {
    likeComment,
    unLikeComment,
    dislikeComment,
    unDislikeComment,
    postCommentsLikes,
    postCommentsDisLikes,
    user,
    Comment_Liked_Disliked_Id,
    commentreplies,
    commentsReplyformLoading,
  } = useAppContext();

  const { _id, content, author, replies, createdAt, likes, dislikes } = comment;

  const [reply, setReply] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const { name, userImg } = author;

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

    if (!commentsReplyformLoading) {
      setReply(false);
    }
  }, [commentsReplyformLoading]);

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

    if (
      Comment_Liked_Disliked_Id._id === _id &&
      Comment_Liked_Disliked_Id.likes.includes(user._id)
    ) {
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

    if (
      Comment_Liked_Disliked_Id._id === _id &&
      Comment_Liked_Disliked_Id.dislikes.includes(user._id)
    ) {
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
              {/* <Ripples className="ripple"> */}
              <BsReplyFill className="reply-icon" />
              <strong>reply</strong>
              {/* </Ripples> */}
            </div>
          </div>
          <div className="comment-content">
            <p>{content}</p>
          </div>

          <div className="comment-like-dislike-container">
            <div className="like-dislike-container">
              <div className="comment-like-container">
                {Comment_Liked_Disliked_Id._id === _id &&
                Comment_Liked_Disliked_Id.likes.includes(user._id) ? (
                  <Ripples className="comment-ripple">
                    <BiSolidLike className="ldc-icons" onClick={handleLike} />
                  </Ripples>
                ) : (
                  <>
                    {like ? (
                      <Ripples className="comment-ripple">
                        <BiSolidLike
                          className="ldc-icons"
                          onClick={handleLike}
                        />
                      </Ripples>
                    ) : (
                      <Ripples className="comment-ripple">
                        <BiLike className="ldc-icons" onClick={handleLike} />
                      </Ripples>
                    )}
                  </>
                )}
                {postCommentsLikes.map(
                  (item) =>
                    item._id === _id && (
                      <strong key={item._id}>
                        {item._id === _id && item.count}
                      </strong>
                    )
                )}
              </div>
              <div className="comment-dislike-container">
                {Comment_Liked_Disliked_Id._id === _id &&
                Comment_Liked_Disliked_Id.dislikes.includes(user._id) ? (
                  <>
                    <Ripples className="comment-ripple">
                      <BiSolidDislike
                        className="ldc-icons"
                        onClick={handleDislike}
                      />
                    </Ripples>
                  </>
                ) : (
                  <>
                    {dislike ? (
                      <Ripples className="comment-ripple">
                        <BiSolidDislike
                          className="ldc-icons"
                          onClick={handleDislike}
                        />
                      </Ripples>
                    ) : (
                      <Ripples className="comment-ripple">
                        <BiDislike
                          className="ldc-icons"
                          onClick={handleDislike}
                        />
                      </Ripples>
                    )}
                  </>
                )}
                {postCommentsDisLikes.map(
                  (item) =>
                    item._id === _id && (
                      <strong key={item._id}>
                        {item._id === _id && item.count}
                      </strong>
                    )
                )}
              </div>
            </div>

            {user._id === author._id && (
              <div className="comment-edit-delete-container">
                <Ripples className="comment-ripple">
                  <BiEdit className="edit-comment-icon" />
                </Ripples>
                <Ripples className="comment-ripple">
                  <AiOutlineDelete className="delete-comment-icon" />
                </Ripples>
              </div>
            )}
          </div>
        </div>

        {/* //$conditional rendring */}

        {reply && <CommentReplyForm name={name} commentId={_id} />}
        <div className="comment-replies">
          {commentreplies &&
            commentreplies.map((item) =>
              _id === item.parentCommentId ? (
                <CommentReplies commentId={_id} replies={item} key={item._id} />
              ) : null
            )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Comments;
