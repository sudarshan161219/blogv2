import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Dashboardnav";
import Logo2 from "../Components/Logo2";
import { IoGridOutline } from "react-icons/io5";
import { BsPerson, BsBookmark } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { FiBookOpen } from "react-icons/fi";
import {AiOutlineHome} from "react-icons/ai"

const Dashboardnav = () => {

  const location = useLocation();
  const userPathE = location.pathname === "/user-profile/edit";


  return (
    <Wrapper>
      <Link to="/">
        <Logo2 />
      </Link>

      <div className={userPathE ? "dashboard-nav hide-dashboard-nav" : "dashboard-nav"}>
        <ul>
          <li>
            <Link to="/" className="Link ">
              <AiOutlineHome className="dash-icons" />
              <span className="dash-nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/user-profile" className="Link ">
              <BsPerson className="dash-icons" />
              <span className="dash-nav-text">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="createpost" className="Link ">
              <HiOutlinePencil className="dash-icons" />
              <span className="dash-nav-text">Write a Post</span>
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Dashboardnav;
