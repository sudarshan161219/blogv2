import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/rblog-logo-logo.png";
import Logo from "../Components/Logo";
import { NavItems } from "../Components/export";
const Navbar = () => {
  let location = useLocation();
  const path = location.pathname === "/register";

  return (
    <header className='nav-header'>
      <nav>
        <Link to='/' className='Link logo-logo-name'>
          <Logo/>
        </Link>

        {!path ? <NavItems /> : null}
      </nav>
    </header>
  );
};

export default Navbar;
