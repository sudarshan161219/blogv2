import React,{useState} from "react";
import Wrapper from "../assets/Wrappers/SearchComponent";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import {options} from "../utils/categoryList"

const SearchComponent = () => {
    const [selectedOption, setSelectedOption] = useState();


    const handleSelectChange =  (e) => {
        setSelectedOption(e.value)
     }
    

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
      <Select
                  defaultValue={selectedOption}
                  onChange={handleSelectChange }
                  options={options}
                />
    </Wrapper>
  );
};

export default SearchComponent;
