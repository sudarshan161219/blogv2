import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import {
  Loading,
} from "../Components/export";
import {
  BsDot,
  BsPersonCircle,
  BsBookmark,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import Wrapper from "../assets/Wrappers/Post";
import Ripples from "react-ripples";

const Post = () => {
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
    postDisLikes,
    toggleLikeBtn,
    toggleDisLikeBtn,
    toggleSaveBtn,
    like,
    dislike,
    save,
    savePost,
    unsavePost,
    postComments,
  } = useAppContext();

  const { id } = useParams();

  const check = post.length === 0

  useEffect(() => {
      getSinglePost(id);
  }, [id, check]);



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
    toggleSaveBtn();
    if (!save) {
      savePost(id);
    } else {
      unsavePost(id);
    }
  };

  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  if (isLoading) {
    return <Loading />;
  }


  const { _id, title, coverImg, content, createdAt, author, postTags, likes, dislikes } = post;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className="post-container">
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
                    <Ripples className="ripple">
                      <BiSolidLike
                        className="post-ldc-icons"
                        onClick={handleLike}
                      />
                    </Ripples>
                  ) : (
                    <Ripples className="ripple">
                      <BiLike className="post-ldc-icons" onClick={handleLike} />
                    </Ripples>
                  )}
                  <strong>{postLikes || likes.length}</strong>
                </div>
                <div className="dislike-container">
                  {dislike ? (
                    <Ripples className="ripple">
                      <BiSolidDislike
                        className="post-ldc-icons"
                        onClick={handleDislike}
                      />
                    </Ripples>
                  ) : (
                    <Ripples className="ripple">
                      <BiDislike
                        className="post-ldc-icons"
                        onClick={handleDislike}
                      />
                    </Ripples>
                  )}
                  <strong>{postDisLikes || dislikes.length}</strong>
                </div>
                <div className="comment-container">
                  <Ripples className="ripple">
                    <BiComment className="post-ldc-icons" />
                  </Ripples>
                  <strong>{postComments}</strong>
                </div>
              </div>
              <div>
                {save ? (
                  <Ripples className="ripple">
                    <BsFillBookmarkCheckFill
                      className="post-ldc-icons"
                      onClick={handleSave}
                    />
                  </Ripples>
                ) : (
                  <Ripples className="ripple">
                    <BsBookmark
                      className="post-ldc-icons"
                      onClick={handleSave}
                    />
                  </Ripples>
                )}
              </div>
            </div>
          ) : (
            <div className="ldc-disable-msg">
              <strong>
                <Link className="strong-link" to="/register">
                  login
                </Link>
                &nbsp; or &nbsp;
                <Link className="strong-link" to="/register">
                  sign up
                </Link>
                &nbsp; to like and comment on post
              </strong>
            </div>
          )}
        </div>

        <div className="tags">
          <ul>
            {postTags && postTags.map((item, idx) => (
              <li key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="ql-snow post-content-container">
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: htmlDecode(content) || content }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
