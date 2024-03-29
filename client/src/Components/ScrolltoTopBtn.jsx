import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/ScrolltoTopBtn";
import { AiOutlineArrowUp } from "react-icons/ai";
import {useAppContext } from "../context/Context"
const ScrolltoTopBtn = () => {
  const { light_dark } = useAppContext()
  const [scrolly, SetScrolly] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      SetScrolly(true);
    } else if (scrolled <= 300) {
      SetScrolly(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Wrapper>
      <div
        onClick={scrollToTop}
        className={scrolly ? "up-container show" : "up-container"}
      >
        <AiOutlineArrowUp className={`up-icon ${light_dark}`} />
      </div>
    </Wrapper>
  );
};

export default ScrolltoTopBtn;
