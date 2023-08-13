import React from "react";
import Wrapper from "../assets/Wrappers/AuthorInfoG";
import { BsLink45Deg } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import profile from "../assets/imgs/profile.png";

const AuthorInfoG = ({ authorInfo }) => {
  const { name, instagram, userInfo, linkden, twitter, personalLink, userImg } =
    authorInfo;


  return (
    <Wrapper>
      <div className="author_info_img_container">
        <img src={authorInfo.userImg ? userImg : profile} alt={name} />
      </div>
      <div className="author_info_info_container">
        <h1>{name}</h1>
        <p>{userInfo}</p>
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
      </div>
    </Wrapper>
  );
};

export default AuthorInfoG;
