import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { Loading } from "../../Components/export";
import { useParams } from "react-router-dom";
import Wrapper from "../../assets/Wrappers/AuthorsSinglePost";

const AuthorsSinglePost = () => {
  const { getSingleAuthorPost, authors_post, isLoading, setPostId, postId } =
    useAppContext();
  const { id } = useParams();
  const { _id, title, summary, coverImg, createdAt, content } = authors_post;

  useEffect(() => {
    setPostId(id);
    getSingleAuthorPost(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="img-container">
        <img src={coverImg} alt={title} />
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
