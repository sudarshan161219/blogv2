import React from "react";
import { Link,  useLocation} from "react-router-dom";
import logo from "../assets/blogLogo.png";
import {NavItems} from "../Components/export"
const Navbar = () => {
  let location = useLocation();
  const path = location.pathname === '/login'
// const ppath = PathMatch()

console.log(path);
  return (
    <header className='nav-header'>
      <nav>
        <Link to='/' className='Link'>
          <img className='logo' src={logo} alt='logo' />
        </Link>

{!path ? <NavItems /> : null}

      </nav>
    </header>
  );
};

export default Navbar;
