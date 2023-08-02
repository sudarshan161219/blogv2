import React, { useEffect } from "react";
import Wrapper from "../../assets/Wrappers/Profile";
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
  const { getProfile, user, isLoading, token } = useAppContext();

//  const {
//       name,
//       userInfo,
//       userProfile,
//       userImg,
//       personalLink,
//       twitter,
//       instagram,
//       linkden,
//     } =  user;
  

  useEffect(() => {
    getProfile();
  }, [user&&user.name, token]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="profile-container">
        <div className="img-container">
          <img className="profile-img" src={user.userImg ? user.userImg : profile} alt="profile" />
        </div>

        <div className="profile-info">
          <h1>{user && user.name}</h1>
          <span>@test123</span>

          <p>{user && user.userInfo}</p>
          <div className="profile-social-container">
            <ul className="link">
              <li className={user && user.personalLink === " " ? "atag" : null}>
                <a
                  href={user && user.personalLink || "https://www.google.com/"}
                  target="_blank"
                >
                  <BsLink45Deg className="link-icon" />
                </a>
              </li>
            </ul>

            <ul className="socials link">
              <li className={user && user.twitter === " " ? "atag" : null}>
                <a href={user && user.twitter || "https://www.google.com/"} target="_blank">
                  <AiOutlineTwitter className="social-icon" />
                </a>
              </li>
              <li className={user && user.instagram === " " ? "atag" : null}>
                <a
                  href={user && user.instagram || "https://www.google.com/"}
                  target="_blank"
                >
                  <AiFillInstagram className="social-icon" />
                </a>
              </li>
              <li className={user && user.linkden === " " ? "atag" : null}>
                <a href={user && user.linkden || "https://www.google.com/"} target="_blank">
                  <AiFillLinkedin className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
