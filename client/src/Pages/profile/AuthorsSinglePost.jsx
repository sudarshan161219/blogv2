import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { Loading } from "../../Components/export";
import { useParams } from "react-router-dom";

const AuthorsSinglePost = () => {
  const { getSingleAuthorPost, authors_post, isLoading, setPostId, postId } =
    useAppContext();
  const { id } = useParams();
  const { _id, title, summary, coverImg, createdAt, content } = authors_post;

  useEffect(() => {
    getSingleAuthorPost(id);
    setPostId(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <img src={coverImg} alt="" />
      <h1>{title}</h1>
      <p>{summary}</p>
      <br />
      <div className="ql-snow">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );

};

export default AuthorsSinglePost;
