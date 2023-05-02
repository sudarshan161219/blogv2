import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { Loading } from "../../Components/export";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../../assets/Wrappers/AuthorsSinglePost";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const AuthorsSinglePost = () => {
  const {
    getSingleAuthorPost,
    clearAuthorSinglePost,
    authors_post,
    isLoading,
    setPostId,
    postId,
  } = useAppContext();
  const { id } = useParams();
  const { _id, title, summary, coverImg, createdAt, content } = authors_post;

  useEffect(() => {
    setPostId(id);
    getSingleAuthorPost(id);
  }, [id]);

  const handleClick = () => {
    clearAuthorSinglePost();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Link
        to="/user-profile/all-posts"
        onClick={handleClick}
        className="back-btn button-28"
      >
        Back
      </Link>
      <div className="img-container">
        <img src={coverImg} alt={title} />
      </div>
      <div className="action-container">
        <Link className="Link " to={"/user-profile/createpost"}>
          <BiEdit className="edit-icon" />
        </Link>
        <Link className="Link ">
          <AiOutlineDelete className="delete-icon " />
        </Link>
      </div>
      <div className="info-content">
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
      <br />
      <div className="ql-snow">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </Wrapper>
  );
};

export default AuthorsSinglePost;