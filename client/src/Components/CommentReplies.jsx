import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/CommentReplies";
import moment from "moment";
import { BsReplyFill } from "react-icons/bs";
import { BiEdit, BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Ripples from "react-ripples";
import CommentReplyForm from "./CommentReplyForm";
import { useAppContext } from "../context/Context";
import { toast } from "react-hot-toast";
import {Paragraph} from "../Components/export"

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
    toggleDeleteCrModal,
    setCommentReplyId,
    editCommentReplyLoading,
    editCommentReply,
    token,
    light_dark
  } = useAppContext();

  const {
    likes,
    dislikes,
    _id,
    repliedComment,
    createdAt,
    updatedAt,
    replieAuthor,
  } = replies;

  const [reply, setReply] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(repliedComment);

  const date = moment(createdAt);
  let Fdate = date.startOf("hour").fromNow();

  useEffect(() => {
    if (likes.includes(user && user._id)) {
      setLike(!like);
    }
    if (dislikes.includes(user && user._id)) {
      setDislike(!dislike);
    }
    if (!commentsReplyformLoading) {
      setReply(false);
    }
    if (!editCommentReplyLoading) {
      setEdit(false);
    }
  }, [
    token,
    editCommentReplyLoading,
    commentsReplyformLoading,
    repliedComment,
  ]);

  const handleReply = () => {
    setReply(!reply);
  };

  const handleClick = () => {
    toggleDeleteCrModal(_id);
  };

  const handleEdit = () => {
    setEdit(!edit);
    setCommentReplyId(_id);
  };

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
      unLikeCommentReply(_id);
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

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (!data.repliedComment) {
      toast.error("please provide value");
    } else {
      editCommentReply(data);
      e.currentTarget.reset();
    }
  };

  return (
    <Wrapper>
      <div className="comment-reply-container">
        <div className={`comment-info-container ${light_dark}`}>
          <div className="comment-name-time-reply">
            <div className="comment-img-name">
              <img
                className="mobile-comment-img"
                src={replieAuthor.userImg}
                alt="avatar"
              />
              <strong className={`comment-user-name ${light_dark}`}>{replieAuthor.name}</strong>
              &#x2022;
              <span className={`date ${light_dark}`}>
                {Fdate} {createdAt !== updatedAt && "(edited)"}
              </span>
            </div>
            {user && (
              <div onClick={handleReply} className="icon-container">
                <BsReplyFill className={`reply-icon ${light_dark}`} />
                <strong className={`icon-text ${light_dark}`}>reply</strong>
              </div>
            )}
          </div>
          <div className="comment-content">
            {edit ? (
              <form onSubmit={handleSubmit}>
                <textarea
                  value={text}
                  onChange={handleChange}
                  placeholder="edit your comment"
                  name="repliedComment"
                  id="repliedComment"
                  className="comment-form"
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="edit-form-btn-container">
                  <button
                    className="cancel-btn"
                    onClick={handleEdit}
                    type="reset"
                  >
                    cancel
                  </button>
                  <button
                    disabled={editCommentReplyLoading}
                    className="edit-btn"
                    type="submit"
                  >
                    {editCommentReplyLoading ? "please wait" : "edit"}
                  </button>
                </div>
              </form>
            ) : (
              <Paragraph>{repliedComment}</Paragraph>
            )}
          </div>

          {!edit && (
            <div className="comment-like-dislike-container">
              <div className="like-dislike-container">

                {/* //comment like  */}
                <div className="comment-like-container">
                  <Ripples className="comment-ripple">
                    {CommentReply_Liked_Disliked_Id._id === _id &&
                      CommentReply_Liked_Disliked_Id.likes.includes(user._id) ? (
                      <BiSolidLike className={`ldc-icons ${light_dark}`} onClick={handleLike} />
                    ) : (
                      <>
                        {user ? (
                          <>
                            {like ? (
                              <BiSolidLike
                                className={`ldc-icons ${light_dark}`}
                                onClick={handleLike}
                              />
                            ) : (
                              <BiLike
                                className={`ldc-icons ${light_dark}`}
                                onClick={handleLike}
                              />
                            )}
                          </>
                        ) : (
                          <BiLike className={`ldc-icons ${light_dark}`} />
                        )}
                      </>
                    )}
                    {postCommentsReplyLikes.map(
                      (item) =>
                        item._id === _id && (
                          <strong className={`postCommentsLikes_Dislikes ${light_dark}`} key={item._id}>
                            {item._id === _id && item.count}
                          </strong>
                        )
                    )}
                  </Ripples>
                </div>

                {/* //comment dislike  */}
                <div className="comment-dislike-container">
                  <Ripples className="comment-ripple">
                    {CommentReply_Liked_Disliked_Id === _id &&
                      CommentReply_Liked_Disliked_Id.dislikes.includes(user._id) ? (
                      <>
                        <BiSolidDislike
                          className={`ldc-icons ${light_dark}`}
                          onClick={handleDislike}
                        />
                      </>
                    ) : (
                      <>
                        {user ? (
                          <>
                            {dislike ? (
                              <BiSolidDislike
                                className={`ldc-icons ${light_dark}`}
                                onClick={handleDislike}
                              />
                            ) : (
                              <BiDislike
                                className={`ldc-icons ${light_dark}`}
                                onClick={handleDislike}
                              />
                            )}
                          </>
                        ) : (
                          <BiDislike
                            className={`ldc-icons ${light_dark}`}
                          />
                        )}
                      </>
                    )}
                    {postCommentsReplyDisLikes.map(
                      (item) =>
                        item._id === _id && (
                          <strong  className={`postCommentsLikes_Dislikes ${light_dark}`} key={item._id}>
                            {item._id === _id && item.count}
                          </strong>
                        )
                    )}
                  </Ripples>
                </div>

              </div>

              {user && user._id === replieAuthor._id && (
                <div className="comment-edit-delete-container">
                  <Ripples onClick={handleEdit} className="comment-ripple">
                    <BiEdit className={`edit-comment-icon ${light_dark}`} />
                  </Ripples>
                  <Ripples className="comment-ripple" onClick={handleClick}>
                    <AiOutlineDelete className={`delete-comment-icon ${light_dark}`} />
                  </Ripples>
                </div>
              )}
            </div>
          )}
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
