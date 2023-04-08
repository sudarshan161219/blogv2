import React from "react";
import Wrapper from "../assets/Wrappers/Sidebar";
import { useAppContext } from "../context/Context";
import { GrClose } from "react-icons/gr";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Sidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();
  return (
    <Wrapper>
      <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
        <div className="aside-nav">
          <GrClose className="close-icon" onClick={toggleSidebar} />
          <Logo />
        </div>
        <div className="navlinks-container">
          <Navlinks />
        </div>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
