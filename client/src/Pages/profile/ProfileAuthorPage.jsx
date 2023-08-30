import React from "react";
import Wrapper from "../../assets/Wrappers/AuthorInfoG";
import profile from "../../assets/imgs/profile.png";
import { Link } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import {Heading, Paragraph} from "../../Components/export"


const ProfileAuthorPage = ({ authorInfo }) => {
  const { name, instagram, userInfo, linkden, twitter, personalLink, userImg } =
    authorInfo;

  return (
    <Wrapper>
      <div className="author_info_img_container">
        <img className="profile-img" src={userImg ? userImg : profile} alt="profile" />
      </div>
      <div className="author_info_info_container">
        <Heading>{name}</Heading>
        <Paragraph>{userInfo}</Paragraph>
        <div className="author_info_links_container">
          <a style={{ visibility: `${personalLink ? "visible" : "collapse"}` }} className="author-links" href={personalLink} _blank="true">
            <BsLink45Deg className="link-icon" />
          </a>
          <ul className="author_info_unodredlist">
            <li>
              <a style={{ visibility: `${instagram ? "visible" : "collapse"}` }} href={instagram} _blank="true">
                <AiFillInstagram className="link-icon" />
              </a>
            </li>
            <li>
              <a style={{ visibility: `${twitter ? "visible" : "collapse"}` }} href={twitter} _blank="true">
                <AiOutlineTwitter className="link-icon" />
              </a>
            </li>
            <li>
              <a style={{ visibility: `${linkden ? "visible" : "collapse"}` }} href={linkden} _blank="true">
                <AiFillLinkedin className="link-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="author_info_btn-container">
          <button className="button-4"><Link className="Link author_info_btn-container-link" to="/user-profile/edit">edit profile</Link></button>
        </div>
      </div>

    </Wrapper>
  )
}

export default ProfileAuthorPage