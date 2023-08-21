import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Logo from "../Components/Logo";
import Navlinks from "./Navlinks";
import Sidebar from "./Sidebar";
import { NavItems } from "../Components/export";
import { BiMenuAltLeft } from "react-icons/bi";
import Wrapper from "../assets/Wrappers/Nav";
import { useAppContext } from "../context/Context";
import { NavSearchComponent } from "../Components/export";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const { toggleSidebar, postId, user, toggleNavSearch, searchNavBar, clearNavSearch } = useAppContext();
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

  // if (searchNavBar) {
  //   return (
  //       <div className="mobile-nav-search-container">
  //         <AiOutlineClose onClick={handleClose} className="mobile-nav-search-close-icon" />
  //         <NavSearchComponent />
  //       </div>
  //   )
  // }

  return (
    <>
      {userPath ||
        userPathP ||
        userPathC ||
        userPathA ||
        userPathE ||
        userPathSP ||
        userPathSSP ? null :
        <Wrapper className="nav-header ">
          <Sidebar />
          <nav className="nav">
            <div className="nav-links">
              <Link to="/" className="Link logo-logo-name">
                <Logo />
              </Link>
              {regpath
                ? null : (
                  <Navlinks />
                )}
            </div>

            {!regpath ? <div className="nav-search-container">
            <NavSearchComponent />
          </div> : null}

            {!regpath ?
              (
                user &&
                <div className="nav-icons">
                  <AiOutlineSearch onClick={toggleNavSearch} className="nav-search-icon" />
                  <NavItems />
                </div>
              )
              : null}

            {!regpath ? (
              !user &&
              <div className="mobile-nav-icons">
                <AiOutlineSearch onClick={toggleNavSearch} className="mobile-nav-search-icon" />
                <BiMenuAltLeft className="ham-icon" onClick={toggleSidebar} />
              </div>) : null}

            {
              !regpath ?
                (
                  !user &&
                  <div className="desktop-nav-icons">
                    <AiOutlineSearch onClick={toggleNavSearch} className="desktop-nav-search-icon" />
                    <Link
                      className="nav-link register Link nav-btn register-btn button-4"
                      to="/register"
                    >
                      Login
                    </Link>
                  </div>
                ) : null

            }

            <div className={`${searchNavBar ? "mobile-nav-search-container-show  mobile-nav-search-container" : " mobile-nav-search-container"}`}>
              <AiOutlineClose onClick={handleClose} className="mobile-nav-search-close-icon" />
              <NavSearchComponent />
            </div>
          </nav>
        </Wrapper>}
    </>
  )
};

export default Navbar;
