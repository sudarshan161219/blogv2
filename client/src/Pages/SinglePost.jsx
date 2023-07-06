import Wrapper from "../assets/Wrappers/SinglePost";
import { CommentsContainer, CommentForm, Post } from "../Components/export";
import DeleteAlertModal from "../Alert/DeleteAlertModal";
import DeleteCRAlertModal from "../Alert/DeleteCRAlertModal";
const SinglePost = () => {
  return (
    <Wrapper>
      <Post />
      <div className="comment-container-div">
        <CommentForm />
        <div className="comments">
          <CommentsContainer />
        </div>
      </div>
      <DeleteAlertModal />
      <DeleteCRAlertModal />
    </Wrapper>
  );
};

export default SinglePost;
