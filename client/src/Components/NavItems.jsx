import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { AiOutlineUser } from "react-icons/ai";
import profile from "../assets/dummy-profile.jpg";
const NavItems = () => {
  const { user } = useAppContext();

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
        <Link className="profile-btn" to="/profile">
          <div className="img-container">
            <img className="profile-img" src={profile} alt="profile" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavItems;
