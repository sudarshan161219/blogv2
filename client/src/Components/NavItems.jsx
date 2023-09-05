import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/Context";
import profile from "../assets/imgs/profile.png";
import Wrapper from "../assets/Wrappers/NavItem";

import { ThemeSwitch } from "../Components/export"

const NavItems = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logoutUser,  toggleSidebar,
    light_dark_mode, light_dark } = useAppContext();

  const handleToggle = () => {
    setToggle(!toggle);
    toggleSidebar();
  };

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

          <ThemeSwitch />

          <div style={{ outline: `${light_dark_mode ? "2px solid #fff" : "0px"}` }} className="profile-container" onClick={handleToggle}>


            <div className="img-container">
              <img
                className="profile-img"
                src={user.userImg || profile}
                alt="profile"
              />
              <ul className={toggle ? `drop-down ${light_dark} show-drop-down` : `drop-down ${light_dark}`}>
                <li className="name">
                  <span className={`name ${light_dark}`}>{user.name}</span>
                </li>
                  <>
                    <li className="list-items">
                      <Link className={`Link list-items ${light_dark}`} to="/user-profile">
                        Profile
                      </Link>
                    </li>
                    <li className="list-items">
                      <Link
                        className={`Link list-items ${light_dark}`}
                        to="/user-profile/createpost"
                      >
                        write a post
                      </Link>
                    </li>
                  </>
                <li className="list-items">
                  <Link className={`Link list-items ${light_dark}`} to="/user-profile/edit">
                    edit profile
                  </Link>
                </li>
                {user && (
                  <li className= "list-items-logout"  onClick={() => logoutUser()}>
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
