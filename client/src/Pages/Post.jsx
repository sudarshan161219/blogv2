import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import {
  Loading,
  Heading,
  Paragraph
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
    toggleCommentSection,
    light_dark
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


  const { title, coverImg, content, createdAt, author, postTags, likes, dislikes,  } = post;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <Wrapper >
      <div className="post-container">
        <div className="post-heading-container">
          <Heading>{title}</Heading>
          <div className="post-date-author-info-container">
            <span className={`Fdate ${light_dark}`}>{Fdate}</span>
            <BsDot />
            <Link
              to={`/author/${author ? author._id : ""}`}
              className={`Link post-author ${light_dark}`}
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

                {/* // like post  */}
                <div className="like-container">
                  <Ripples className="ripple">
                    {like ? (
                      <BiSolidLike
                        className={`post-ldc-icons ${light_dark}`}
                        onClick={handleLike}
                      />
                    ) : (
                      <BiLike className={`post-ldc-icons ${light_dark}`} onClick={handleLike} />
                    )}
                    <strong className={`like-dislike-comment-stats ${light_dark}`}>{postLikes || likes.length}</strong>
                  </Ripples>
                </div>

                {/* // dislike post  */}
                <div className="dislike-container">
                  <Ripples className="ripple">
                    {dislike ? (
                      <BiSolidDislike
                        className={`post-ldc-icons ${light_dark}`}
                        onClick={handleDislike}
                      />

                    ) : (
                      <BiDislike
                        className={`post-ldc-icons ${light_dark}`}
                        onClick={handleDislike}
                      />
                    )}
                    <strong className={`like-dislike-comment-stats ${light_dark}`}>{postDisLikes || dislikes.length}</strong>
                  </Ripples>
                </div>


                {/* // post comment  */}
                <div className="comment-container">
                  <Ripples onClick={() => toggleCommentSection()} className="ripple">
                    <BiComment className={`post-ldc-icons ${light_dark}`} />
                    <strong className={`like-dislike-comment-stats ${light_dark}`}>{postComments}</strong>
                  </Ripples>
                </div>
              </div>
              <div>

                {/* // save post */}
                <Ripples className="ripple">
                  {save ? (
                    <BsFillBookmarkCheckFill
                      className={`post-ldc-icons ${light_dark}`}
                      onClick={handleSave}
                    />
                  ) : (

                    <BsBookmark
                      className={`post-ldc-icons ${light_dark}`}
                      onClick={handleSave}
                    />
                  )}
                </Ripples>


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
            className={`ql-editor ${light_dark}`}
            dangerouslySetInnerHTML={{ __html: htmlDecode(content) || content }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
