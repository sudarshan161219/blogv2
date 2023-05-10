import React from "react";
import Wrapper from "../assets/Wrappers/Tags";
import { BsSearch } from "react-icons/bs";

const Tags = () => {
  const tagArr = [
    "Food",
    "Travel",
    "Lifestyle ",
    "Fashion&beauty ",
    "Photography",
    "Personal",
    "DIY craft",
    "Parenting",
    "Music",
    "Business",
    "Art&design",
    "Book&writing",
    "Personal finance",
    "Interior design",
    "Sports",
    "News",
    "Movie",
    "Religion",
    "Political",
    "technology",
    "Minimalism",
    "Other",
  ];

  return (
    <Wrapper>
      <div className="search-container">
        <form className="search-container-form">
          <input
            className="search-container-input"
            type="text"
            placeholder="Find the topics you care about..."
          />
          <div className="icon-container">
            <BsSearch className="search-container-searchIcon" />
          </div>
        </form>
      </div>

      <div className="btn-container">
        {tagArr.map((item) => (
          <button className="btn-tag">{item}</button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Tags;
