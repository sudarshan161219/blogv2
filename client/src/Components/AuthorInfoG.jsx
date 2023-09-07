import React from "react";
import Wrapper from "../assets/Wrappers/AuthorInfoG";
import { BsLink45Deg } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import profile from "../assets/imgs/profile.png";
import {Heading, Paragraph} from "../Components/export"
import { useAppContext } from "../context/Context";

const AuthorInfoG = ({ authorInfo }) => {
  const {light_dark, GauthorPosts} = useAppContext()
  const { name, instagram, userInfo, linkden, twitter, personalLink, userImg } =
    authorInfo;


  return (
    <Wrapper>
      <div className="author_info_img_container" >
        <div className="author_img_container">
          <img className="profile-img" src={userImg ? userImg : profile} alt="profile" />
        </div>
        <div className="author_info_container">
          <div className="author_info_heading-button">
            <Heading>{name}</Heading>
          </div>

          <div className="total-posts" >
            <span className={`total-posts-span ${light_dark}`}>{GauthorPosts.length > 1 ? "Posts" : "Post"} {GauthorPosts.length}</span>
          </div>

          <div className="author_bio-container">
            <Paragraph>{userInfo}</Paragraph>
          </div>

          <div className="author_personal_links_container">
            <div className="author_info_links_container">
              <a style={{ visibility: `${personalLink ? "visible" : "collapse"}` }} className="author-links" href={personalLink} _blank="true">
                <BsLink45Deg className={`link-icon ${light_dark}`} />
              </a>
              <ul className="author_info_unodredlist">
                <li>
                  <a style={{ visibility: `${instagram ? "visible" : "collapse"}` }} href={instagram} _blank="true">
                    <AiFillInstagram className={`link-icon ${light_dark}`} />
                  </a>
                </li>
                <li>
                  <a style={{ visibility: `${twitter ? "visible" : "collapse"}` }} href={twitter} _blank="true">
                    <AiOutlineTwitter className={`link-icon ${light_dark}`} />
                  </a>
                </li>
                <li>
                  <a style={{ visibility: `${linkden ? "visible" : "collapse"}` }} href={linkden} _blank="true">
                    <AiFillLinkedin className={`link-icon ${light_dark}`} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-nav" >

      </div>

    </Wrapper>
  );
};

export default AuthorInfoG;
