import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Logo from "../Components/Logo";
import Navlinks from "./Navlinks";
import Sidebar from "./Sidebar";
import { NavItems } from "../Components/export";
import { BiMenuAltLeft } from "react-icons/bi";
import Wrapper from "../assets/Wrappers/Nav";
import { useAppContext } from "../context/Context";
import { NavSearchComponent} from "../Components/export";


const Navbar = () => {
  const { id } = useParams();
  const { toggleSidebar, postId, user } = useAppContext();
  let location = useLocation();
  const regpath = location.pathname === "/register";
  const userPath = location.pathname === "/user-profile";
  const userPathP = location.pathname === "/user-profile/profile";
  const userPathC = location.pathname === "/user-profile/createpost";
  const userPathA = location.pathname === `/user-profile/author-post`;
  const userPathE = location.pathname === "/user-profile/edit";
  const userPathSP = location.pathname === `/user-profile/${postId}`;
  const userPathSSP = location.pathname === `/user-profile/savedpost`;


  return (
    <>
      {userPath ||
        userPathP ||
        userPathC ||
        userPathA ||
        userPathE ||
        userPathSP ||
        userPathSSP ? null : <Wrapper className="nav-header ">
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

          <div className="nav-search-container">
            <NavSearchComponent />
          </div>
          {!regpath ? <NavItems /> : null}

          {!regpath ? (
            !user && <BiMenuAltLeft className="ham-icon" onClick={toggleSidebar} />
          ) : null}
          <Link
            className="nav-link register Link nav-btn register-btn button-4"
            to="/register"
          >
            Login
          </Link>
        </nav>
      </Wrapper>}
    </>
  )
};

export default Navbar;
