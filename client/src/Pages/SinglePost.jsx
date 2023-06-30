import Wrapper from "../assets/Wrappers/SinglePost";
import {
  CommentsContainer,
  CommentForm,
  Post,
} from "../Components/export";

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
    </Wrapper>
  );
};

export default SinglePost;
