import React from "react";
import Wrapper from "../assets/Wrappers/Tags";
import { BsSearch } from "react-icons/bs";
import tagArr from "../utils/tagArr";
import { SearchComponent } from "../Components/export";

const Tags = () => {
  return (
    <Wrapper>
      <div className="search-container">
        <SearchComponent />
      </div>
{/* 
      <div className="btn-container">
        {tagArr.map((item, idx) => (
          <button className="btn-tag" key={idx}>
            {item}
          </button>
        ))}
      </div> */}
    </Wrapper>
  );
};

export default Tags;
