import React from "react";
import Wrapper from "../../assets/Wrappers/AuthorInfoG";
import profile from "../../assets/imgs/profile.png";
import { Link } from "react-router-dom";
import { BsLink45Deg, BsBookmark } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoGridOutline } from "react-icons/io5"
import { Heading, Paragraph } from "../../Components/export"
import { useAppContext } from "../../context/Context";

const ProfileAuthorPage = ({ authorInfo }) => {
  const { totalPosts, light_dark, togglePageFn, } = useAppContext()
  const { name, instagram, userInfo, linkden, twitter, personalLink, userImg } =
    authorInfo;


  const handelChange = () => {
    togglePageFn("post")
  }

  const handelChange1 = () => {
    togglePageFn("save")

  }

  return (
    <Wrapper>
      <div className="author_info_img_container" >
        <div className="author_img_container">
          <img className="profile-img" src={userImg ? userImg : profile} alt="profile" />
        </div>
        <div className="author_info_container">
          <div className="author_info_heading-button">
            <Heading>{name}</Heading>
            <Link className={`Link button-4 author_info_button ${light_dark}`} to="/user-profile/edit">edit profile</Link>
          </div>

          <div className="total-posts" >
            <span className={`total-posts-span ${light_dark}`}>{totalPosts > 1 ? "Posts" : "Post"} {totalPosts}</span>
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
        <div onClick={handelChange} className={`profile-nav-p ${light_dark}`}>
          <IoGridOutline className="dash-icons" /> POSTS
        </div>
        <div onClick={handelChange1} className={`profile-nav-p ${light_dark}`}>
          <BsBookmark className="dash-icons" /> SAVED
        </div>

      </div>

    </Wrapper>
  )
}

export default ProfileAuthorPage