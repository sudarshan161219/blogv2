import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Dashboardnav";
import Logo2 from "../Components/Logo2";
import { IoGridOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { FiBookOpen, FiEdit } from "react-icons/fi";
import { BsGrid1X2 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../context/Context";

const Dashboardnav = () => {
  const { toggleDashNav, dashNav, showSidebar } = useAppContext();

  const refTwo = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleToggle, true);
    return () => {
      // console.log("component unmounted");
      document.removeEventListener("click", handleToggle, true);
    };
  }, []);

  const handleToggle = (e) => {
    if (!refTwo.current.contains(e.target)) {
      return;
    } else {
      toggleDashNav();
    }
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo2 />
      </Link>

      <BsGrid1X2
        onClick={dashNav ? toggleDashNav : null}
        className={!dashNav ? "hide-dash-menu-icon" : "dash-menu-icon"}
      />

      <div
        ref={refTwo}
        className={
          !showSidebar && !dashNav
            ? "dashboard-nav show-dashboard-nav"
            : "dashboard-nav"
        }
      >
        <ul>
          <li className="toggle-li">
            {!dashNav ? (
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
            <Link to="all-posts" className="Link ">
              <FiBookOpen className="dash-icons" />
              Posts
            </Link>
          </li>
          {/* <li>
            <Link to="edit" className="Link ">
              <FiEdit className="dash-icons" />
             Edit
            </Link>
          </li> */}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Dashboardnav;
