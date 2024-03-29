import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/Comments";
import moment from "moment";
import { BsReplyFill } from "react-icons/bs";
import { BiEdit, BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import CommentReplyForm from "./CommentReplyForm";
import CommentReplies from "./CommentReplies";
import { useAppContext } from "../context/Context";
import { AiOutlineDelete } from "react-icons/ai";
import Ripples from "react-ripples";
import { toast } from "react-hot-toast";
import profile from "../assets/imgs/profile.png"
import { Paragraph } from "../Components/export"
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
    editComment,
    toggleDeleteModal,
    editCommentLoading,
    setCommentId,
    editCommentReplyLoading,
    postCommentsReply,
    light_dark
  } = useAppContext();

  const {
    _id,
    content,
    author,
    replies,
    createdAt,
    updatedAt,
    likes,
    dislikes,
  } = comment;

  const [reply, setReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(content);
  const { name, userImg } = author;

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

    if (!editCommentLoading) {
      setEdit(false);
    }
  }, [
    editCommentLoading,
    commentsReplyformLoading,
    editCommentReplyLoading,
  ]);

  const handleReply = () => {
    setReply(!reply);
  };

  const handleEdit = () => {
    setEdit(!edit);
    setCommentId(_id);
  };

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

  const handleDelete = () => {
    toggleDeleteModal(_id);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (!data.content) {
      toast.error("please provide value");
    } else {
      editComment(data);
      e.currentTarget.reset();
    }
  };

  const handleReplyClick = () => {
    setShowReplies(!showReplies);
  };

  return (
    <Wrapper>
      <div className="comment-container">
        <div className={`comment-info-container ${light_dark}`}>
          <div className="comment-name-time-reply">
            <div className="comment-img-name">
              <img className="mobile-comment-img" src={user ? user.userImg : profile}
                alt={user && user.name} />
              <strong className={`comment-user-name ${light_dark}`}>{name}</strong>
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
                  name="content"
                  id="content"
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
                    disabled={editCommentLoading}
                    className="edit-btn"
                    type="submit"
                  >
                    {editCommentLoading ? "please wait" : "edit"}
                  </button>
                </div>
              </form>
            ) : (
              <Paragraph>{content}</Paragraph>
            )}
          </div>

          {!edit && (
            <div className="comment-like-dislike-container">
              <div className="like-dislike-container">


                {/* // like comment */}
                <div className="comment-like-container">
                  <Ripples className="comment-ripple">
                    {Comment_Liked_Disliked_Id._id === _id &&
                      Comment_Liked_Disliked_Id.likes.includes(user._id) ? (
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
                    {postCommentsLikes.map(
                      (item) =>
                        item._id === _id && (
                          <strong className={`postCommentsLikes_Dislikes ${light_dark}`} key={item._id}>
                            {item._id === _id && item.count}
                          </strong>
                        )
                    )}

                  </Ripples>
                </div>

                {/* // dislike comment */}
                <div className="comment-dislike-container">
                  <Ripples className="comment-ripple">
                    {Comment_Liked_Disliked_Id._id === _id &&
                      Comment_Liked_Disliked_Id.dislikes.includes(user._id) ? (
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
                          <BiDislike className={`ldc-icons ${light_dark}`} />
                        )}
                      </>
                    )}
                    {postCommentsDisLikes.map(
                      (item) =>
                        item._id === _id && (
                          <strong className={`postCommentsLikes_Dislikes ${light_dark}`} key={item._id}>
                            {item._id === _id && item.count}
                          </strong>
                        )
                    )}
                  </Ripples>
                </div>

              </div>

              {user && user._id === author._id && (
                <div className="comment-edit-delete-container">
                  <Ripples onClick={handleEdit} className="comment-ripple">
                    <BiEdit className={`edit-comment-icon ${light_dark}`} />
                  </Ripples>
                  <Ripples onClick={handleDelete} className="comment-ripple">
                    <AiOutlineDelete className={`delete-comment-icon ${light_dark}`} />
                  </Ripples>
                </div>
              )}
            </div>
          )}
        </div>

        {/* //$conditional rendring */}

        {reply && <CommentReplyForm name={name} commentId={_id} />}

        {showReplies && (
          <div className="comment-replies">
            {commentreplies &&
              commentreplies.map((item) =>
                _id === item.parentCommentId ? (
                  <CommentReplies
                    commentId={_id}
                    replies={item}
                    key={item._id}
                  />
                ) : null
              )}
          </div>
        )}

        {replies.length > 0 && (
          <button className="replies-btn button-4" onClick={handleReplyClick}>
            {showReplies ? "hide reply" : `show replies ${postCommentsReply}`}
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default Comments;
