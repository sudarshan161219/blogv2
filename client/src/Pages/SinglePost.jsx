import Wrapper from "../assets/Wrappers/SinglePost";
import {
  CommentsContainer,
  CommentForm,
  Post,
} from "../Components/export";
import DeleteAlertModal from "../Alert/DeleteAlertModal";
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
      < DeleteAlertModal />
    </Wrapper>
  );
};

export default SinglePost;
