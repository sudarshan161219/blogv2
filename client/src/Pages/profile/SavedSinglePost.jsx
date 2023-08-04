import React, { useEffect } from "react";
import Wrapper from "../../assets/Wrappers/Post";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../../context/Context";
import {
  Loading,
  Post,
  CommentForm,
  CommentsContainer,
} from "../../Components/export";
import DeleteAlertModal from "../../Alert/DeleteAlertModal"
import DeleteCRAlertModal from "../../Alert/DeleteCRAlertModal"

const SavedSinglePost = () => {
  const { clearAuthorSinglePost, getSinglePost, isLoading, user, post } =
    useAppContext();

  const { id } = useParams();
  const { title, coverImg, content, createdAt, author } = post;


  return (


    <Wrapper>
      <Post />
      <div className="comment-container-div">
        {user && <CommentForm />}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="comments">
            <CommentsContainer />
          </div>
        )}
      </div>
      <DeleteAlertModal />
      <DeleteCRAlertModal />
    </Wrapper>
  );
};

export default SavedSinglePost;
