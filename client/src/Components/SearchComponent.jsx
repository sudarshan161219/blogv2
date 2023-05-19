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
    category,
    isLoading,
  } = useAppContext();

  const selectChange = (e) => {
    handleSelectChange(e.value);
  };

  const selectSortChange = (e) => {
    handleSortSelectChange(e.value);
  };

  const handleSearch = (e) => {
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
            placeholder="Find the topics you care about..."
            onChange={handleSearch}
          />
          <div className="icon-container">
            <BsSearch className="search-container-searchIcon" />
          </div>
        </form>
      </div>
      <div className="select-container">
        <Select
          defaultValue={category}
          name="category"
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
