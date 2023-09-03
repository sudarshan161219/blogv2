import React,{useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Components/Logo";
import Navlinks from "./Navlinks"; 
import { NavItems } from "../Components/export";
import { BiMenuAltLeft } from "react-icons/bi";
import Wrapper from "../assets/Wrappers/Nav";
import { useAppContext } from "../context/Context";
import { NavSearchComponent } from "../Components/export";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import {ThemeSwitch} from "../Components/export"

const Navbar = () => {
  const { toggleSidebar, postId, user, toggleNavSearch, searchNavBar, clearNavSearch, light_dark, light_dark_mode } = useAppContext();

  useEffect(() => {
    if (light_dark_mode) {
      document.body.style.backgroundColor = "#1f1e21";
    } else {
      document.body.style.backgroundColor = "#fafbfc";
    }
  }, [light_dark_mode]);

  let location = useLocation();
  const regpath = location.pathname === "/register";
  const userPath = location.pathname === "/user-profile";
  const userPathP = location.pathname === "/user-profile/profile";
  const userPathC = location.pathname === "/user-profile/createpost";
  const userPathA = location.pathname === `/user-profile/author-post`;
  const userPathE = location.pathname === "/user-profile/edit";
  const userPathSP = location.pathname === `/user-profile/${postId}`;
  const userPathSSP = location.pathname === `/user-profile/savedpost`;


  const handleClose = () => {
    toggleNavSearch();
    clearNavSearch()
  }

  if(regpath){
    return 
  }

  return (
    <>
      {userPath ||
        userPathP ||
        userPathC ||
        userPathA ||
        userPathE ||
        userPathSP ||
        userPathSSP ? null :
        <Wrapper className={`header ${light_dark}`}>
          <nav className={`nav  ${light_dark}`}>
            <div className="nav-links">
              <Link to="/" className="Link logo-logo-name">
                <Logo />
              </Link>
                  <Navlinks />
            </div>

            {!regpath ? <div className="nav-search-container">
              <NavSearchComponent />
            </div> : null}

            {!regpath ?
              (
                user &&
                <div className="nav-icons">
                  <AiOutlineSearch  onClick={toggleNavSearch} className={`nav-search-icon ${light_dark}`} />
                  <NavItems />
                </div>
              )
              : null}


            {!regpath ? (
              !user &&
              <div className="mobile-nav-icons">
                <AiOutlineSearch  onClick={toggleNavSearch} className={`mobile-nav-search-icon ${light_dark}`} />
                <ThemeSwitch />
                <BiMenuAltLeft className={`ham-icon ${light_dark}`} onClick={toggleSidebar} />
              </div>) : null}

            {
              !regpath ?
                (
                  !user &&
                  <div className="desktop-nav-icons">
                    <AiOutlineSearch  onClick={toggleNavSearch} className={`desktop-nav-search-icon ${light_dark}`} />
                    <ThemeSwitch />
                    <Link
                      className={`nav-link register Link nav-btn register-btn button-4 ${light_dark}`}
                      to="/register"
                    >
                      Login
                    </Link>
                  </div>
                ) : null
            }
            <div className={`${searchNavBar ? `mobile-nav-search-container-show  mobile-nav-search-container ${light_dark}` :  `mobile-nav-search-container ${light_dark}`}`}>
              <AiOutlineClose onClick={handleClose} className="mobile-nav-search-close-icon" />
              <NavSearchComponent />
            </div>
          </nav>
        </Wrapper>}
    </>
  )
};

export default Navbar;
