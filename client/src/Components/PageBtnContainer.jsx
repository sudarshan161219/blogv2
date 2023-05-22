import React from "react";
import Wrapper from "../assets/Wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAppContext } from "../context/Context";
const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = 1;
    }
    changePage(newPage);
  };

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };

  return (
    <Wrapper>

<ul className="btns">
      <div className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
      </div>
        {pages.map((pageNum) => (
          <li
            type="button"
            className={pageNum === page ? "pageBtn active" : "pageBtn"}
            key={pageNum}
            onClick={() => changePage(pageNum)}
          >
            {pageNum}
          </li>
        ))}
      <div className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
      </div>
</ul>
    </Wrapper>
  );
};

export default PageBtnContainer;
