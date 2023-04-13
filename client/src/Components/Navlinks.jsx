import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { AiOutlineHome, AiOutlineTag } from "react-icons/ai";
import { TbSquareLetterA } from "react-icons/tb";
const Navlinks = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <ul>
      <li>
        <Link onClick={!toggleSidebar} className="Link " to="/">
          <AiOutlineHome className="sidebar-icons" /> Home
        </Link>
      </li>
      <li>
        <Link onClick={!toggleSidebar} className="Link " to="/tags">
          <AiOutlineTag className="sidebar-icons" />
          Tags
        </Link>
      </li>
      <li>
        <Link onClick={!toggleSidebar} className="Link " to="/about">
          <TbSquareLetterA className="sidebar-icons" />
          About
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
