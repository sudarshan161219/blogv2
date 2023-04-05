import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Components/Logo";
import { NavItems } from "../Components/export";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  let location = useLocation();
  const path = location.pathname === "/register";

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header className="nav-header">
      <nav>
        <Link to="/" className="Link logo-logo-name">
          <Logo />
        </Link>

        {!path ? <NavItems /> : null}
      </nav>
    </header>
  );
};

export default Navbar;
