import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/Wrappers/SinglePost";
import moment from "moment";
import { Loading } from "../Components/export";
import {
  BsDot,
  BsPersonCircle,
  BsBookmark,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const SinglePost = () => {
  const {
    getSinglePost,
    post,
    isLoading,
    likePost,
    unLikePost,
    dislikePost,
    disunLikePost,
    user,
    postLikes,
    toggleLikeBtn,
    toggleDisLikeBtn,
    like,
    dislike,
  } = useAppContext();
  // const [like, setLike] = useState(true);
  // const [dislike, setDislike] = useState(true);
  const [save, setSave] = useState(false);

  const { id } = useParams();

  const { title, coverImg, content, createdAt, author, likes, dislikes } = post;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  useEffect(() => {
    getSinglePost(id);
  }, [id, user]);

  const handleLike = () => {
    toggleLikeBtn();
    if (!like) {
      likePost(id);
      disunLikePost(id);
    } else {
      unLikePost(id);
    }
    if (dislike) {
      !toggleDisLikeBtn();
    }
  };

  const handleDislike = () => {
    toggleDisLikeBtn();
    if (!dislike) {
      dislikePost(id);
      unLikePost(id);
    } else {
      disunLikePost(id);
    }
    if (like) {
      !toggleLikeBtn();
    }
  };

  const handleSave = () => {
    setSave(!save);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="post-heading-container">
        <h1>{title}</h1>
        <div className="post-date-author-info-container">
          <span>{Fdate}</span>
          <BsDot />
          <Link
            to={`/author/${author ? author._id : ""}`}
            className="Link post-author"
          >
            <BsPersonCircle />
            {author ? author.name : null}
          </Link>
        </div>
      </div>

      <div className="post-img-container noSelect">
        <img src={coverImg} alt={title} />
        {user ? (
          <div className="like-dislike-comment-save">
            <div className="like-dislike-comment">
              <div className="like-container">
                {like ? (
                  <BiSolidLike className="ldc-icons" onClick={handleLike} />
                ) : (
                  <BiLike className="ldc-icons" onClick={handleLike} />
                )}
                {likes && <strong>{likes.length}</strong>}
              </div>
              <div className="dislike-container">
                {dislike ? (
                  <BiSolidDislike
                    className="ldc-icons"
                    onClick={handleDislike}
                  />
                ) : (
                  <BiDislike className="ldc-icons" onClick={handleDislike} />
                )}
                 {dislikes && <strong>{dislikes.length}</strong>}
              </div>
              <BiComment className="ldc-icons" />
            </div>
            <div>
              {save ? (
                <BsFillBookmarkCheckFill
                  className="ldc-icons"
                  onClick={handleSave}
                />
              ) : (
                <BsBookmark className="ldc-icons" onClick={handleSave} />
              )}
            </div>
          </div>
        ) : (
          <div className="ldc-disable-msg">
            <strong>
              <Link className="strong-link" to="/register">
                login 
              </Link>
              &nbsp; 
              or
              &nbsp; 
              <Link className="strong-link" to="/register">
                sign up
              </Link>
              &nbsp;  to like and comment on post
            </strong>
          </div>
        )}
      </div>

      <div className="ql-snow post-content-container">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </Wrapper>
  );
};

export default SinglePost;
