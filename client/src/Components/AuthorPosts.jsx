import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/CardComponent";
import moment from "moment";

import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppContext } from "../context/Context";
import {Heading, Paragraph} from "../Components/export"
const AuthorPosts = ({ item }) => {
  const { toggleDeletePostModal, setEditPost, user, light_dark } = useAppContext();
  const { _id, title, coverImg, createdAt, author, content } = item;

  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");


  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return  e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }



  return (
    <Wrapper className={`homeCards ${light_dark}`}>
      <div className="card">
        <div className="homepage-img-container">
          <img className="homepage-img" src={coverImg} alt=" articalimg" />
        </div>
        <div className="homepage-info-container">
          <div className="homepage-author-info-container">
            <span>{Fdate} </span>
          </div>
          <div className="homepage-text-info-container">
            <Heading>{title}</Heading>
            <p
               className={`ptag globalParagraph ${light_dark}`}
              dangerouslySetInnerHTML={{ __html:   htmlDecode(content.substring(0, 105)) || content.substring(0, 105) }}
            ></p>


            <div className="action-link-container">
              {user._id === author && <div className="action-container">
                <Link
                  className="Link "
                  onClick={() => setEditPost(_id)}
                  to={"/user-profile/createpost"}
                >
                  <BiEdit className={`edit-icon ${light_dark}`} />
                </Link>
                <Link onClick={() => toggleDeletePostModal(_id)} className="Link ">
                  <AiOutlineDelete className={`delete-icon ${light_dark}`} />
                </Link>
              </div>}
              <Link className={`Link read ${light_dark}`} to={`/user-profile/${_id}`}>
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthorPosts;
