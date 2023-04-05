import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { AiOutlineUser } from "react-icons/ai";
import profile from "../assets/dummy-profile.jpg";
import "./Navitems.css";

const NavItems = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logoutUser } = useAppContext();

  return (
    <div className="nav-items ">
      {!user ? (
        <Link
          className="nav-link register Link nav-btn register-btn button-28"
          to="/register"
        >
          Login
        </Link>
      ) : (
        <div className="profile-container" onClick={() => setToggle(!toggle)}>
          <div className="img-container">
            <img className="profile-img" src={profile} alt="profile" />
            <ul className={toggle ? "drop-down show-drop-down" : "drop-down"}>
              <li className="name-email">
                <span className="name">{user.name}</span>
                <span className="email">{user.email}</span>
              </li>
              <li className="list-items">
                <Link className="Link list-items" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="list-items">
                <Link className="Link list-items" to="/createpost">
                  write a post
                </Link>
              </li>
              <li className=" list-items" onClick={() => logoutUser()}>
                  Log out 
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItems;
