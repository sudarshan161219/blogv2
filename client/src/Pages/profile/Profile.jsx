import React, { useEffect } from "react";
import Wrapper from "../../assets/Wrappers/Profile";
import profile from "../../assets/imgs/profile.png";
import { BsLink45Deg } from "react-icons/bs";
import { useAppContext } from "../../context/Context";
import load from "../../assets/Rolling-1s-31px.svg";
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
  }, []);

  const {
    name,
    userInfo,
    userProfile,
    userImg,
    personalLink,
    twitter,
    instagram,
    linkden,
  } = user;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="profile-container">
        <div className="img-container">
          <img className="profile-img" src={userImg || profile} alt="profile" />
        </div>

        <div className="profile-info">
          <h1>{name}</h1>
          <strong>@test123</strong>

          <p>{userInfo}</p>
          <div className="profile-social-container">
            <ul className="link">
              {personalLink !== "" ? (
                <li>
                  <a href={personalLink} target="_blank">
                    <BsLink45Deg className="link-icon" />
                    {personalLink}
                  </a>
                </li>
              ) : null}
            </ul>

            <ul className="socials">
              <li>
                <AiOutlineTwitter className="social-icon" />
              </li>
              <li>
                <AiFillInstagram className="social-icon" />
              </li>
              <li>
                <AiFillLinkedin className="social-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
