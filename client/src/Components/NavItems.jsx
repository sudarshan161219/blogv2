import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/Context";
import profile from "../assets/imgs/profile.png";
import Wrapper from "../assets/Wrappers/NavItem";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs"
const NavItems = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logoutUser, postId, toggleSidebar, toggleThemeMode,
    light_dark_mode } = useAppContext();

  const handleToggle = () => {
    setToggle(!toggle);
    toggleSidebar();
  };

  const handleThemeMode = () => {
    toggleThemeMode();
  };


  const location = useLocation();
  const userPath = location.pathname === "/user-profile";
  const userPathP = location.pathname === "/user-profile/profile";
  const userPathC = location.pathname === "/user-profile/createpost";
  const userPathA = location.pathname === `/user-profile/author-post`;
  const userPathE = location.pathname === "/user-profile/edit";
  const userPathSP = location.pathname === `/user-profile/${postId}`;
  const userPathSSP = location.pathname === `/user-profile/savedpost`;
  return (
    <Wrapper className="nav-items" style={{ display: `${!user ? "none" : "block"}`, }}>
      {!user ? (
        <Link
          className="nav-link register Link nav-btn register-btn button-4"
          to="/register"
        >
          Login
        </Link>
      ) : (
        <div className="nav-items-main-container">
          <div className="dark-light-container" >
            <div style={{ transform: `${light_dark_mode ? "translateY(-25px)" : "translateY(0px)"}`, transition: "ease-in-out 0.3s" }} className="dark-light-icon-container">
              <BsMoonStars style={{ transform: `${light_dark_mode ? "rotate(180deg)" : "rotate(0)"}`, transition: "ease-in-out 0.3s" }} onClick={handleThemeMode} />
              <BsFillSunFill style={{ transform: `${light_dark_mode ? "rotate(180deg)" : "rotate(0)"}`, transition: "ease-in-out 0.3s" }} onClick={handleThemeMode} />
            </div>
          </div>

          <div className="profile-container" onClick={handleToggle}>


            <div className="img-container">
              <img
                className="profile-img"
                src={user.userImg || profile}
                alt="profile"
              />
              <ul className={toggle ? "drop-down show-drop-down" : "drop-down"}>
                <li className="name-email">
                  <span className="name">{user.name}</span>
                  <span className="email">{user.email}</span>
                </li>
                {!userPath &&
                  !userPathP &&
                  !userPathC &&
                  !userPathA &&
                  !userPathE &&
                  !userPathSP ? (
                  <>
                    <li className="list-items">
                      <Link className="Link list-items" to="/user-profile">
                        Dashboard
                      </Link>
                    </li>
                    <li className="list-items">
                      <Link
                        className="Link list-items"
                        to="/user-profile/createpost"
                      >
                        write a post
                      </Link>
                    </li>
                  </>
                ) : null}
                <li className="list-items">
                  <Link className="Link list-items" to="/user-profile/edit">
                    edit profile
                  </Link>
                </li>
                {user && (
                  <li className=" list-items" onClick={() => logoutUser()}>
                    Log out
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default NavItems;
