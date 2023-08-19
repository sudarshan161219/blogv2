import React, { useState, useMemo, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import Wrapper from '../assets/Wrappers/NavSearchComponent'
import { useAppContext } from '../context/Context'
import { NavSearchResultsComponent } from "../Components/export"
import gif from "../assets/Rolling-0.7s-157px.svg";


const NavSearchComponent = () => {
    const [loacalSearch, setLocalSearch] = useState("");
    const {
        handleChangeN,
        getNavSearchPost,
        clearNavSearch,
        postN,
        authorN,
        searchN,
        isNavLoading
    } = useAppContext();

    useEffect(() => {
        if (searchN) {
            getNavSearchPost()
        } else if (searchN === "") {
            clearNavSearch()
        }

    }, [searchN])

    const debounce = () => {
        let timeoutId;
        return (e) => {
            setLocalSearch(e.target.value);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                handleChangeN({ name: e.target.name, value: e.target.value });
            }, 1100);
        };
    };

    const optimizedDebounce = useMemo(() => debounce(), []);

    const myComponentStyle1 = {
        height: "250px"
    }

    return (
        <Wrapper>
            <form className='nav-form' >
                <input name="searchN"
                    value={loacalSearch} onChange={optimizedDebounce} className='nav-input' type="text" placeholder="Search Posts/Authors" />
                <BsSearch className="search-container-searchIcon" />
            </form>

            {
                isNavLoading ? <div className="nav-search-results">
                    <img className="nav-search-loading" src={gif} alt="loading...." />
                </div> :

                    <div className="nav-search-results"
                        style={postN.length > 4 || authorN.length > 4 ? myComponentStyle1 : null}
                    >
                        {postN.length !== 0 &&
                            <>
                                {postN.map((item) => (
                                    <NavSearchResultsComponent searchedItem={item} key={item._id} />
                                ))}
                            </>

                        }

                        {authorN.length !== 0 &&
                            <>
                                {authorN.map((item) => (
                                    <NavSearchResultsComponent searchedItem={item} key={item._id} />
                                ))}
                            </>
                        }
                    </div>


            }

        </Wrapper>
    )
}

export default NavSearchComponent