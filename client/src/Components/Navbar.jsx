import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/rblog-logo-logo.png";
import { NavItems } from "../Components/export";
const Navbar = () => {
  let location = useLocation();
  const path = location.pathname === "/login";

  return (
    <header className='nav-header'>
      <nav>
        <Link to='/' className='Link logo-logo-name'>
          <img className='logo' src={logo} alt='logo' />
        </Link>

        {!path ? <NavItems /> : null}
      </nav>
    </header>
  );
};

export default Navbar;
