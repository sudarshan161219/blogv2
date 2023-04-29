import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Logo from "../Components/Logo";
import Navlinks from "./Navlinks";
import Sidebar from "./Sidebar";
import { NavItems } from "../Components/export";
import { BiMenuAltLeft } from "react-icons/bi";
import Wrapper from "../assets/Wrappers/Nav";
import { useAppContext } from "../context/Context";

const Navbar = () => {
  const { id } = useParams();
  const { toggleSidebar, postId } = useAppContext();
  let location = useLocation();
  const regpath = location.pathname === "/register";
  const userPath = location.pathname === "/user-profile";
  const userPathP = location.pathname === "/user-profile/profile";
  const userPathC = location.pathname === "/user-profile/createpost";
  const userPathA = location.pathname === `/user-profile/all-posts`;
  const userPathE = location.pathname === "/user-profile/edit";
  const userPathSP = location.pathname === `/user-profile/${ postId}`;

  return (
    <Wrapper className="nav-header">
      <Sidebar />
      <nav className="nav">
        {!regpath ? (
          <BiMenuAltLeft className="ham-icon" onClick={toggleSidebar} />
        ) : null}
        <div className="nav-links">
          <Link to="/" className="Link logo-logo-name">
            <Logo />
          </Link>
          {regpath ||
          userPath ||
          userPathP ||
          userPathC ||
          userPathA ||
          userPathE ||
          userPathSP ? null : 
            <Navlinks />
          }
        </div>
        {!regpath ? <NavItems /> : null}
      </nav>
    </Wrapper>
  );
};

export default Navbar;
