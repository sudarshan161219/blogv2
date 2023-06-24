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
  const { allPosts, getSinglePost, post, isLoading, likePost, user } =
    useAppContext();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [save, setSave] = useState(false);

  const { id } = useParams();

  const { title, coverImg, content, createdAt, author } = post;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  useEffect(() => {
    getSinglePost(id);
  }, [id, user]);

  const handleLike = () => {
    setLike(!like);
    if (like) {
      likePost(id);
    }
    if (dislike) {
      setDislike(false);
    }
  };

  const handleDislike = () => {
    setDislike(!dislike);
    if (like) {
      setLike(false);
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
              {like ? (
                <BiSolidLike className="ldc-icons" onClick={handleLike} />
              ) : (
                <BiLike className="ldc-icons" onClick={handleLike} />
              )}

              {dislike ? (
                <BiSolidDislike className="ldc-icons" onClick={handleDislike} />
              ) : (
                <BiDislike className="ldc-icons" onClick={handleDislike} />
              )}
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
            <strong><Link className="strong-link" to="/register">login</Link> or <Link className="strong-link" to="/register">sign up</Link>  to like and comment on post</strong>
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
