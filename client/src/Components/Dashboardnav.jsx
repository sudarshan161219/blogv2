import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Dashboardnav";
import Logo2 from "../Components/Logo2";
import { IoGridOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { FiBookOpen } from "react-icons/fi";

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
            <span className="dash-nav-text">Stats</span>  
            </Link>
          </li>
          <li>
            <Link to="profile" className="Link ">
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
          <li>
            <Link to="all-posts" className="Link ">
              <FiBookOpen className="dash-icons" />
             <span className="dash-nav-text">Posts</span> 
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Dashboardnav;
