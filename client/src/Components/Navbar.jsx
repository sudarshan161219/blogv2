import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Components/Logo";
import { NavItems } from "../Components/export";
import Wrapper from "../assets/Wrappers/Nav";

const Navbar = () => {

  let location = useLocation();
  const path = location.pathname === "/register";

  return (
    <Wrapper className="nav-header">
      <nav className="nav">
        <Link to="/" className="Link logo-logo-name">
          <Logo />
        </Link>

        {!path ? <NavItems /> : null}
      </nav>
    </Wrapper>
  );
};

export default Navbar;
