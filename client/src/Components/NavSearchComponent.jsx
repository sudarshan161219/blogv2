import React, { useState, useMemo, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import Wrapper from '../assets/Wrappers/NavSearchComponent'
import { useAppContext } from '../context/Context'
import { NavSearchResultsComponent } from "../Components/export"
import gif from "../assets/Rolling-0.7s-157px.svg";
import { AiOutlineCloseCircle } from "react-icons/ai"

const NavSearchComponent = () => {
    const [loacalSearch, setLocalSearch] = useState("");
    const {
        handleChangeN,
        getNavSearchPost,
        clearNavSearch,
        postN,
        authorN,
        searchN,
        isNavLoading,
        light_dark,
        light_dark_mode
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

    const clearValues = () => {
        setLocalSearch("")
        clearNavSearch()
    }

    return (
        <Wrapper>
            <form className='nav-form' >
                <input name="searchN"
                    value={loacalSearch} onChange={optimizedDebounce} className={`nav-input  ${light_dark}`} type="text" placeholder="Search Posts/Authors" />
                <BsSearch className={`search-container-searchIcon ${light_dark}`} />
                <AiOutlineCloseCircle onClick={clearValues} style={{ display: `${searchN ? "block" : "none"}` }} className={`search-container-closeIcon ${light_dark}`} />
            </form>

            {
                isNavLoading ? <div className={`nav-search-results ${light_dark}`}>
                    {light_dark_mode ?
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :
                        <div class="lds-ring"><img className={`nav-search-loading ${light_dark}`} src={gif} alt="loading...." /> </div>
                    }

                </div> :

                    <div className={`${postN.length >= 1 || authorN.length >= 1 ? `nav-search-results ${light_dark}` : "nav-search-results-hide"}`}
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