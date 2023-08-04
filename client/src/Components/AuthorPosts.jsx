import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/HomePage";
import moment from "moment";

import { HiOutlineArrowNarrowRight } from "react-icons/hi ";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppContext } from "../context/Context";

const AuthorPosts = ({ item }) => {
  const { toggleDeletePostModal, setEditPost, user } = useAppContext();
  const { _id, title, coverImg, createdAt, author, content } = item;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");


  return (
    <Wrapper>
      <div className="card">
        <div className="homepage-img-container">
          <img className="homepage-img" src={coverImg} alt=" articalimg" />
        </div>
        <div className="homepage-info-container">
          <div className="homepage-author-info-container">
            <span>{Fdate} </span>
          </div>
          <div className="homepage-text-info-container">
            <h1>{title}</h1>
            <p
              className="ptag"
              dangerouslySetInnerHTML={{ __html: content.substring(0, 105) }}
            ></p>


            <div className="action-link-container">
              {user._id === author && <div className="action-container">
                <Link
                  className="Link "
                  onClick={() => setEditPost(_id)}
                  to={"/user-profile/createpost"}
                >
                  <BiEdit className="edit-icon" />
                </Link>
                <Link onClick={() => toggleDeletePostModal(_id)} className="Link ">
                  <AiOutlineDelete className="delete-icon " />
                </Link>
              </div>}
              <Link className="Link read" to={`/user-profile/${_id}`}>
                Read <HiOutlineArrowNarrowRight className="read-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthorPosts;
