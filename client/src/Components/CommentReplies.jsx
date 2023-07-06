import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/CommentReplies";
import { BsReplyFill } from "react-icons/bs";
import { BiEdit, BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Ripples from "react-ripples";
import CommentReplyForm from "./CommentReplyForm";
import { useAppContext } from "../context/Context";

const CommentReplies = ({ replies, commentId }) => {
  const {
    user,
    likeCommentReply,
    unLikeCommentReply,
    dislikeCommentReply,
    unDislikeCommentReply,
    CommentReply_Liked_Disliked_Id,
    postCommentsReplyLikes,
    postCommentsReplyDisLikes,
    commentsReplyformLoading,
    toggleDeleteCrModal
  } = useAppContext();

  const [reply, setReply] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const { likes, dislikes, _id, repliedComment, replieAuthor } = replies;

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

  const handleClick = () => {
    toggleDeleteCrModal(_id)
  }

  const handleLike = () => {
    if (!like) {
      likeCommentReply(_id);
      unDislikeCommentReply(_id);
    } else {
      unLikeCommentReply(_id);
    }
    if (dislike) {
      setDislike(!dislike);
    }

    if (
      CommentReply_Liked_Disliked_Id._id === _id &&
      CommentReply_Liked_Disliked_Id.likes.includes(user._id)
    ) {
      unLikeCommentReply(_id);
      setLike(!like);
    } else {
      setLike(!like);
    }
  };

  const handleDislike = () => {
    if (!dislike) {
      dislikeCommentReply(_id);
      unLikeCommenReplyt(_id);
    } else {
      unDislikeCommentReply(_id);
    }
    if (like) {
      setLike(!like);
    }

    if (
      CommentReply_Liked_Disliked_Id._id === _id &&
      CommentReply_Liked_Disliked_Id.dislikes.includes(user._id)
    ) {
      unDislikeCommentReply(_id);
      setDislike(!dislike);
    } else {
      setDislike(!dislike);
    }
  };

  return (
    <Wrapper>
      <div className="comment-reply-container">
        <div className="comment-info-container">
          <div className="comment-name-time-reply">
            <div className="comment-img-name">
              <img
                className="mobile-comment-img"
                src={replieAuthor.userImg}
                alt="avatar"
              />
              <strong>{replieAuthor.name}</strong>
            </div>
            <div onClick={handleReply} className="icon-container">
              <BsReplyFill className="reply-icon" />
              <strong>reply</strong>
            </div>
          </div>
          <div className="comment-content">
            <p>{repliedComment}</p>
          </div>

          <div className="comment-like-dislike-container">
            <div className="like-dislike-container">
              <div className="comment-like-container">
                {CommentReply_Liked_Disliked_Id._id === _id &&
                CommentReply_Liked_Disliked_Id.likes.includes(user._id) ? (
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
                {postCommentsReplyLikes.map(
                  (item) =>
                    item._id === _id && (
                      <strong key={item._id}>
                        {item._id === _id && item.count}
                      </strong>
                    )
                )}
              </div>
              <div className="comment-dislike-container">
                {CommentReply_Liked_Disliked_Id === _id &&
                CommentReply_Liked_Disliked_Id.dislikes.includes(user._id) ? (
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
                {postCommentsReplyDisLikes.map(
                  (item) =>
                    item._id === _id && (
                      <strong key={item._id}>
                        {item._id === _id && item.count}
                      </strong>
                    )
                )}
              </div>
            </div>

            {user._id === replieAuthor._id && (
              <div className="comment-edit-delete-container">
                <Ripples className="comment-ripple">
                  <BiEdit className="edit-comment-icon" />
                </Ripples>
                <Ripples className="comment-ripple" onClick={handleClick}>
                  <AiOutlineDelete className="delete-comment-icon" />
                </Ripples>
              </div>
            )}
          </div>
        </div>
        {/* //$conditional rendring */}
        {reply && (
          <CommentReplyForm commentId={commentId} name={replieAuthor.name} />
        )}
      </div>
    </Wrapper>
  );
};

export default CommentReplies;
