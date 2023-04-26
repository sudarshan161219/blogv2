import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppContext } from "../context/Context";
import profile from "../assets/imgs/profile.png";
import Wrapper from "../assets/Wrappers/NavItem";

const NavItems = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logoutUser } = useAppContext();
  const { id } = useParams();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const location = useLocation();
  const userPath = location.pathname === "/user-profile";
  const userPathP = location.pathname === "/user-profile/profile";
  const userPathC = location.pathname === "/user-profile/createpost";
  const userPathA = location.pathname === `/user-profile/all-posts`;
  const userPathE = location.pathname === "/user-profile/edit";

  return (
    <Wrapper className="nav-items ">
      {!user ? (
        <Link
          className="nav-link register Link nav-btn register-btn button-28"
          to="/register"
        >
          Login
        </Link>
      ) : (
        <div className="profile-container" onClick={handleToggle}>
          <div className="img-container">
            <img className="profile-img" src={user.userImg || profile} alt="profile" />
            <ul className={toggle ? "drop-down show-drop-down" : "drop-down"}>
              <li className="name-email">
                <span className="name">{user.name}</span>
                <span className="email">{user.email}</span>
              </li>
              {!userPath &&
              !userPathP &&
              !userPathC &&
              !userPathA &&
              !userPathE ? (
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
              <li className=" list-items" onClick={() => logoutUser()}>
                Log out
              </li>
            </ul>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default NavItems;
