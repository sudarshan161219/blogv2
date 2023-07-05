import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/CommentReplies";
import { BsReplyFill } from "react-icons/bs";
import { BiEdit, BiLike, BiDislike, BiComment } from "react-icons/bi";

import { AiOutlineDelete } from "react-icons/ai";
// import CommentRepliess from "./CommentReplies"
import Ripples from "react-ripples";
import CommentReplyForm from "./CommentReplyForm";
import { useAppContext } from "../context/Context";
const CommentReplies = ({ replies, commentId }) => {
  const { formLoading, user } = useAppContext();
  const [reply, setReply] = useState(false);

  const { repliedComment, replieAuthor } = replies;
  const handleReply = () => {
    setReply(!reply);
  };

  useEffect(() => {
    if (!formLoading) {
      setReply(false);
    }
  }, [formLoading]);

  // const handleLike = () => {
  //   if (!like) {
  //     likeComment(_id);
  //     unDislikeComment(_id);
  //   } else {
  //     unLikeComment(_id);
  //   }
  //   if (dislike) {
  //     setDislike(!dislike);
  //   }

  //   if (paisaId._id === _id && paisaId.likes.includes(user._id)) {
  //     unLikeComment(_id);
  //     setLike(!like);
  //   } else {
  //     setLike(!like);
  //   }
  // };

  // const handleDislike = () => {
  //   if (!dislike) {
  //     dislikeComment(_id);
  //     unLikeComment(_id);
  //   } else {
  //     unDislikeComment(_id);
  //   }
  //   if (like) {
  //     setLike(!like);
  //   }

  //   if (paisaId._id === _id && paisaId.dislikes.includes(user._id)) {
  //     unDislikeComment(_id);
  //     setDislike(!dislike);
  //   } else {
  //     setDislike(!dislike);
  //   }
  // };


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
            {user._id === replieAuthor._id && (
              <div className="comment-edit-delete-container">
                <Ripples className="comment-ripple edit-ripple">
                  <BiEdit className="edit-comment-icon" />
                </Ripples>
                <Ripples className="comment-ripple delete-ripple">
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
