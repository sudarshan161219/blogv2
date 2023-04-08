import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Components/Logo";
import Navlinks from "./Navlinks";
import Sidebar from "./Sidebar";
import { NavItems } from "../Components/export";
import { BiMenuAltLeft } from "react-icons/bi";
import Wrapper from "../assets/Wrappers/Nav";
import { useAppContext } from "../context/Context";
const Navbar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();
  let location = useLocation();
  const path = location.pathname === "/register";

  return (
    <Wrapper className="nav-header">
        <Sidebar />
      <nav className="nav">
      {!path ?<BiMenuAltLeft className="ham-icon" onClick={toggleSidebar} /> : null}
        <div className="nav-links">
          <Link to="/" className="Link logo-logo-name">
            <Logo />
          </Link>
          <Navlinks />
        </div>
        {!path ? <NavItems /> : null}
      </nav>
    </Wrapper>
  );
};

export default Navbar;
