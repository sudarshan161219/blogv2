import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/NavSearchResultsComponent';
import { useAppContext } from '../context/Context';


const NavSearchResultsComponent = ({ searchedItem }) => {

const {clearNavSearch, light_dark} = useAppContext()

  return (
    <Wrapper>
      {
        searchedItem.title ?
          <Link onClick={clearNavSearch} to={`/post/${searchedItem._id}`} className={`Link searchedItem ${light_dark}`} >{searchedItem.title}
            <span className='searchedItem-span'>(artical)</span>
          </Link> :
          <Link onClick={clearNavSearch} to={`/author/${searchedItem._id}`} className={`Link searchedItem ${light_dark} searchedItem-author ${light_dark} `} >
            <div className='searchedItem-img-container' >
              <img className='searchedItem-img' src={searchedItem.userImg} alt="searchedItem.name" />
            </div>
            {searchedItem.name}
            <span className='searchedItem-span'>(user)</span>
          </Link>
      }
    </Wrapper>
  )
}

export default NavSearchResultsComponent