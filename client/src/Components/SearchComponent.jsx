import React, { useState } from "react";
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
    search,
    sort,
    SearchCategory,
    isLoading,
  } = useAppContext();

  const selectChange = (e) => {
    handleSelectChange(e.value);
  };

  const selectSortChange = (e) => {
    handleSortSelectChange(e.value);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <div className="search-container">
        <form className="search-container-form">
          <input
            className="search-container-input"
            type="text"
            name="search"
            value={search}
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
          defaultValue={SearchCategory}
          name="SearchCategory"
          placeholder="category"
          onChange={selectChange}
          options={options}
        />
        <Select
          defaultValue={sort}
          name="sort"
          placeholder="latest - oldest"
          onChange={selectSortChange}
          options={sortOptions}
        />
      </div>
    </Wrapper>
  );
};

export default SearchComponent;
