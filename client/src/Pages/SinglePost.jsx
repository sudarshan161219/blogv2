import Wrapper from "../assets/Wrappers/SinglePost";
import { CommentsContainer, CommentForm} from "../Components/export";
import DeleteAlertModal from "../Alert/DeleteAlertModal";
import DeleteCRAlertModal from "../Alert/DeleteCRAlertModal";
import { useAppContext } from "../context/Context";
import { Loading } from "../Components/export";
import Post from "./Post";

const SinglePost = () => {
  const { user, isLoading } = useAppContext();
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

export default SinglePost;
