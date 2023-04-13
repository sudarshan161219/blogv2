import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Dashboardnav";
import Logo2 from "../Components/Logo2";
import { IoGridOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { FiBookOpen } from "react-icons/fi";
import { CiGrid42 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../context/Context";

const Dashboardnav = () => {
  const { toggleDashNav, dashNav } = useAppContext();

  return (
    <Wrapper>
      <Link to="/">
        <Logo2 />
      </Link>
      {!dashNav ? (
          <CiGrid42 onClick={toggleDashNav} className="dash-menu-icon" />
      ) : null}

      <div
        className={
          dashNav ? "dashboard-nav show-dashboard-nav" : "dashboard-nav"
        }
      >
        <ul>
          <li className="toggle-li">
            {dashNav ? (
              <AiOutlineClose
                onClick={toggleDashNav}
                className="dash-close-icon"
              />
            ) : null}
          </li>
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
            <Link className="Link ">
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
