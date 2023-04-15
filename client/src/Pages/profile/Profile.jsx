import React from "react";
import Wrapper from "../../assets/Wrappers/Profile";
import profileImg from "../../assets/dummy-profile.jpg";
import { BsLink45Deg } from "react-icons/bs";
import { FiBookOpen, FiEdit } from "react-icons/fi";


import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";


const Profile = () => {
  return (
    <Wrapper>
      <div className="profile-container">
        <div className="img-container">
          <img className="profile-img" src={profileImg} alt="profile" />
        </div>

        <div className="profile-info">
          <h1>Test</h1>
          <strong>@test123</strong>

          <p>
            Ipsum adipisicing culpa est nisi consequat ex amet magna culpa
            veniam tempor irure ea. <br />
            Reprehenderit labore do tempor eiusmod in consectetur ex sunt id
            mollit commodo ipsum deserunt quis.
          </p>
        <div className="profile-social-container">
          <ul className="link">
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <BsLink45Deg className="link-icon" />
                Test123.com
              </a>
            </li>
          </ul>

          <ul className="socials">
          <li><AiOutlineTwitter className="social-icon"/></li>
          <li><AiFillInstagram  className="social-icon"/></li>
          <li><AiFillLinkedin className="social-icon"/></li>
          </ul>
        </div>

        </div>


      </div>
    </Wrapper>
  );
};

export default Profile;
