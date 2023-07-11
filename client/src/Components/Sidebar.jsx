import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/Wrappers/Sidebar";
import { useAppContext } from "../context/Context";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import Logo2 from "./Logo2";
import Navlinks from "./Navlinks";

const Sidebar = () => {
  const { toggleSidebar, showSidebar, user, logoutUser } = useAppContext();

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    document.addEventListener("click", handleEvent, true);
    return () => {
      document.removeEventListener("click", handleEvent, true);
    };
  }, [showSidebar]);

  const refOne = useRef(null);

  const handleEvent = (e) => {
    if (!refOne.current.contains(e.target)) {
      return;
    } else {
      !toggleSidebar();
    }
  };

  return (
    <Wrapper>
      <aside
        ref={refOne}
        className={showSidebar ? "sidebar show-sidebar" : "sidebar"}
      >
        <div className="backdrop"></div>
        <div className="aside-nav">
          <AiOutlineClose
            className="close-icon"
            onClick={showSidebar ? toggleSidebar : null}
          />
          <Logo2 />
        </div>

        {user && (
          <Link
            to="user-profile/profile"
            className="nav-profile-container Link"
          >
            <div className="nav-img-name">
              <img className="nav-img" src={user.userImg} alt={user.name} />
              <strong className="nav-name"> {user.name}</strong>
            </div>
            <BsArrowRight className="nav-icon" />
          </Link>
        )}

        <div className="navlinks-container">
          <Navlinks />
        </div>

        <div className="logout-container">
          <div className="icon-name" onClick={logoutUser}>
            <AiOutlineLogout />
            <strong>Logout</strong>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
