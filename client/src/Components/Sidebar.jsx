import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/Wrappers/Sidebar";
import { useAppContext } from "../context/Context";
import { AiOutlineClose } from "react-icons/ai";
import Logo2 from "./Logo2";
import Navlinks from "./Navlinks";

const Sidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();
  useEffect(() => {
    document.addEventListener("click", handleEvent, true)
  }, []);
  const refOne = useRef(null);

  const handleEvent = (e) => {
    if(!refOne.current.contains(e.target)){
     return
    }else{
      !toggleSidebar()
    }
  }

  return (
    <Wrapper>
      <aside
        ref={refOne}
        className={showSidebar ? "sidebar show-sidebar" : "sidebar"}
      >
        <div className="backdrop"></div>
        <div className="aside-nav">
          <AiOutlineClose className="close-icon" onClick={showSidebar ?  toggleSidebar : null} />
          <Logo2 />
        </div>
        <div className="navlinks-container">
          <Navlinks />
        </div>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
