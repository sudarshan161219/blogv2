import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { Loading } from "../../Components/export";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../../assets/Wrappers/AuthorsSinglePost";
import { BiEdit } from "react-icons/bi";
import DOMPurify from "dompurify";

const AuthorsSinglePost = () => {
  const {
    getSingleAuthorPost,
    clearAuthorSinglePost,
    authors_post,
    isLoading,
    setPostId,
    setEditPost,
    token,
    user,
  } = useAppContext();
  const { id } = useParams();
  const {
    _id,
    title,
    summary,
    coverImg,
    createdAt,
    content,
    postTags,
    category,
  } = authors_post;

  useEffect(() => {
    setPostId(id);
    getSingleAuthorPost(id)
  }, [id]);

  const handleClick = () => {
    clearAuthorSinglePost();
  };

  if (isLoading) {
    return <Loading />;
  }

  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  return (
    <Wrapper>
      <Link
        to="/user-profile/profile"
        onClick={handleClick}
        className="back-btn button-4"
      >
        Back
      </Link>
      <div className="img-container">
        <img src={coverImg} alt={title} />
      </div>
      <div className="action-container">
        <Link
          className="Link "
          onClick={() => setEditPost(_id)}
          to={"/user-profile/createpost"}
        >
          <BiEdit className="edit-icon" />
        </Link>
      </div>
      <div className="info-content">
        <h1>{title}</h1>
        <p>{summary}</p>
        <div className="tags-container">
          {postTags && postTags.map((tag, idx) => {
            return <strong key={idx} className="tags">{tag}</strong>;
          })}
        </div>
      </div>
      <br />
      <div className="ql-snow">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: htmlDecode(content) || content}}
        ></div>
      </div>
    </Wrapper>
  );
};

export default AuthorsSinglePost;
