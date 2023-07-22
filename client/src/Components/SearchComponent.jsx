import React from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/SearchComponent";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import { options, sortOptions } from "../utils/categoryList";
import { useAppContext } from "../context/Context";
const SearchComponent = () => {
  const {
    handleChange,
    handleSelectChange,
    handleSortSelectChange,
    handleChangeT,
    handleSelectChangeT,
    handleSortSelectChangeT,
    search,
    sort,
    SearchCategory,
    searchT,
    sortT,
    SearchCategoryT,
    isLoading,
  } = useAppContext();

  let location = useLocation();
  const tagpath = location.pathname === "/tags";

  const selectChange = (e) => {
    if (tagpath) {
      handleSelectChangeT(e.value);
    } else {
      handleSelectChange(e.value);
    }
  };

  const selectSortChange = (e) => {
    if (tagpath) {
      handleSortSelectChangeT(e.value);
    } else {
      handleSortSelectChange(e.value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (isLoading) return;
    if (tagpath) {
      handleChangeT({ name: e.target.name, value: e.target.value });
    } else {
      handleChange({ name: e.target.name, value: e.target.value });
    }
  };

  return (
    <Wrapper>
      <div className="search-container">
        <form className="search-container-form">
          <input
            className="search-container-input"
            type="text"
            name={tagpath ? "searchT" : "search"}
            value={tagpath ? searchT : search}
            placeholder="Search Posts"
            onChange={handleSearch}
          />
          <div className="icon-container">
            <BsSearch className="search-container-searchIcon" />
          </div>
        </form>
      </div>
      <div className="select-container">
        <Select
          defaultValue={tagpath ? SearchCategoryT : SearchCategory}
          name="SearchCategory"
          placeholder="category"
          onChange={selectChange}
          options={options}
        />
        <Select
          defaultValue={tagpath ? sortT : sort}
          name="sort"
          placeholder="sort"
          onChange={selectSortChange}
          options={sortOptions}
        />
      </div>
    </Wrapper>
  );
};

export default SearchComponent;
