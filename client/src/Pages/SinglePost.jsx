import { useRef, useEffect } from "react";
import Wrapper from "../assets/Wrappers/SinglePost";
import { CommentsContainer, CommentForm } from "../Components/export";
import DeleteAlertModal from "../Alert/DeleteAlertModal";
import DeleteCRAlertModal from "../Alert/DeleteCRAlertModal";
import { useAppContext } from "../context/Context";
import { Loading } from "../Components/export";
import Post from "./Post";
import { GrFormClose } from "react-icons/gr"
import Ripples from "react-ripples";

const SinglePost = () => {
  const { user, isLoading, commentSection, toggleCommentSection } = useAppContext();


  useEffect(() => {
    if (commentSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

  }, [commentSection]);


  return (
    <Wrapper>
      <Post />
      <div className={commentSection ? "comment-container-div-visible comment-container-div" : "comment-container-div"}  >
        <div className="icon-container">
          <Ripples onClick={() => toggleCommentSection()} className="ripple no-select">
            <GrFormClose className="close-icon" />
          </Ripples>
        </div>
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

export default SinglePost;
