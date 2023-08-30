import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { AiOutlineHome, AiOutlineTag } from "react-icons/ai";
import { TbSquareLetterA } from "react-icons/tb";
import { IoGridOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { FiBookOpen } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";


const Navlinks = () => {
  const { toggleSidebar, user, light_dark } = useAppContext();

  return (
    <ul className={`ul ${light_dark}`}>

      {user &&
        <>
          <li className=" mobile-links">
            <Link onClick={!toggleSidebar} className={`ulLink ${light_dark}`} to="/user-profile">
              <IoGridOutline className="sidebar-icons" /> Dashboard
            </Link>
          </li>


          <li className="mobile-links">
            <Link onClick={!toggleSidebar} className={`ulLink ${light_dark} `} to="/user-profile/createpost">
              <HiOutlinePencil className="sidebar-icons" /> Write a post
            </Link>
          </li>


          <li className="mobile-links">
            <Link onClick={!toggleSidebar} className={`ulLink ${light_dark} `} to="/user-profile/edit">
              <BiEdit className="sidebar-icons" /> edit profile
            </Link>
          </li>


          <li className="mobile-links">
            <Link onClick={!toggleSidebar} className={`ulLink ${light_dark} `} to="/user-profile/savedpost">
              <BsBookmark className="sidebar-icons" /> saved posts
            </Link>
          </li>
        </>
      }

      <li>
        <Link onClick={!toggleSidebar} className={`ulLink ${light_dark} `} to="/">
          <AiOutlineHome className="sidebar-icons" /> Home
        </Link>
      </li>
      <li>
        <Link onClick={!toggleSidebar} className={`ulLink ${light_dark} `} to="/tags">
          <AiOutlineTag className="sidebar-icons" />
          Tags
        </Link>
      </li>
      <li>
        <Link onClick={!toggleSidebar} className={`ulLink ${light_dark} `} to="/about">
          <TbSquareLetterA className="sidebar-icons" />
          About
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
