import { useRef, useEffect } from "react";
import Wrapper from "../assets/Wrappers/SinglePost";
import { CommentsContainer, CommentForm } from "../Components/export";
import DeleteAlertModal from "../Alert/DeleteAlertModal";
import DeleteCRAlertModal from "../Alert/DeleteCRAlertModal";
import { useAppContext } from "../context/Context";
import { Loading } from "../Components/export";
import Post from "./Post";
import { AiOutlineCloseCircle } from "react-icons/ai"
import Ripples from "react-ripples";

const SinglePost = () => {
  const { user, isLoading, commentSection, toggleCommentSection, light_dark, postComments } = useAppContext();


  useEffect(() => {
    if (commentSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

  }, [commentSection]);


  return (
    <Wrapper className={`Post ${light_dark}`}>
      <Post />
      <div className={commentSection ? `comment-container-div-visible comment-container-div ${light_dark}` : `comment-container-div ${light_dark}`}  >
        <div className={`comment-container-icon-heading ${light_dark}`}>
          <div className="commentsContainerHeading">
            <h4 className={`postCommentsHeading ${light_dark}`}>
              {postComments === 1 ? "comment" : "comments"}
            </h4>
            &nbsp;
            <span className={`commentS ${light_dark}`}>{`(${postComments})`}</span>
          </div>
          <Ripples onClick={() => toggleCommentSection()} className="ripple no-select">
            <AiOutlineCloseCircle className={`close-icon  ${light_dark}`} />
          </Ripples>
        </div>
        {user && <CommentForm />}
        {isLoading ? (
          <Loading />
        ) : (
          <div className={`comments `}>
            <CommentsContainer />
          </div>
        )}
      </div>
      <DeleteAlertModal />
      <DeleteCRAlertModal />
    </Wrapper>
  );
};

export default SinglePost;
