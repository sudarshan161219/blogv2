import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/SearchComponent";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import { options } from "../utils/categoryList";
import { useAppContext } from "../context/Context";
const SearchComponent = () => {
  const { handleChange, handleSelectChange, search, category, isLoading } = useAppContext();
  const [selectedOption, setSelectedOption] = useState();

  const SelectChange = (e) => {
    // setSelectedOption(e.value);
    handleSelectChange(e.value);
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
      <Select
       defaultValue={category}
        name="category"
        onChange={SelectChange}
        options={options}
      />
    </Wrapper>
  );
};

export default SearchComponent;
