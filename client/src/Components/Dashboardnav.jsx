import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Dashboardnav";
import Logo2 from "../Components/Logo2";
import { IoGridOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { FiBookOpen, FiEdit } from "react-icons/fi";

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
            <Link to="/user-profile" className="Link ">
              <IoGridOutline className="dash-icons" />
              Stats
            </Link>
          </li>
          <li>
            <Link to="profile" className="Link ">
              <BsPerson className="dash-icons" />
              Profile
            </Link>
          </li>
          <li>
            <Link to="createpost" className="Link ">
              <HiOutlinePencil className="dash-icons" />
              Write a Post
            </Link>
          </li>
          <li>
            <Link to="all-posts" className="Link ">
              <FiBookOpen className="dash-icons" />
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Dashboardnav;
