import React, { useEffect } from "react";
import Wrapper from "../../assets/Wrappers/AuthorInfoG";
import profile from "../../assets/imgs/profile.png";
import { BsLink45Deg } from "react-icons/bs";
import { useAppContext } from "../../context/Context";

import { Loading } from "../../Components/export";

import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Profile = () => {
  const { getProfile, user, isLoading } = useAppContext();


  useEffect(() => {
    getProfile();
  }, [user && user.name]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="author_info_img_container">
        <img className="profile-img" src={user.userImg ? user.userImg : profile} alt="profile" />
      </div>
      <div className="author_info_info_container">
        <h1>{user && user.name}</h1>
        <p>{user.userInfo}</p>
        <div className="author_info_links_container">
          <a style={{ visibility: `${user.personalLink ? "visible" : "collapse"}` }} className="author-links" href={user.personalLink} _blank="true">
            <BsLink45Deg className="link-icon" />
          </a>
          <ul className="author_info_unodredlist">
            <li>
              <a style={{ visibility: `${user.instagram ? "visible" : "collapse"}` }} href={user.instagram} _blank="true">
                <AiFillInstagram className="link-icon" />
              </a>
            </li>
            <li>
              <a style={{ visibility: `${user.twitter ? "visible" : "collapse"}` }} href={user.twitter} _blank="true">
                <AiOutlineTwitter className="link-icon" />
              </a>
            </li>
            <li>
              <a style={{ visibility: `${user.linkden ? "visible" : "collapse"}` }} href={user.linkden} _blank="true">
                <AiFillLinkedin className="link-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
