import React from "react";
import Wrapper from "../assets/Wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAppContext } from "../context/Context";
const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    console.log("next page");
  };

  const prevPage = () => {
    console.log("prev page");
  };

  return (
    <Wrapper>
      <div className="btns">
        <div className="prev-btn" onClick={prevPage}>
          <HiChevronDoubleLeft />
          prev
        </div>
        {pages.map((pageNum) => (
          <button
            type="button"
            className={pageNum === page ? "pageBtn active" : "pageBtn"}
            key={pageNum}
            onClick={() => console.log("change page")}
          >
            {pageNum}
          </button>
        ))}
        <div className="next-btn" onClick={nextPage}>
          next
          <HiChevronDoubleRight />
        </div>
      </div>
    </Wrapper>
  );
};

export default PageBtnContainer;
