import React,{useEffect} from "react";
import Wrapper from "../assets/Wrappers/Tags";
import { BsSearch } from "react-icons/bs";
import tagArr from "../utils/tagArr";
import { SearchComponent } from "../Components/export";
import { useAppContext } from "../context/Context";


const Tags = () => {

const {getTagSearchPost, searchT, sortT, SearchCategoryT, pageT} = useAppContext()

useEffect(() => {
  getTagSearchPost()
},[searchT, sortT, SearchCategoryT, pageT])

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
