import React, { useState, useMemo } from "react";
import { BsSearch } from "react-icons/bs"
import Wrapper from '../assets/Wrappers/NavSearchComponent'
import { useAppContext } from '../context/Context'
const NavSearchComponent = () => {
    const [loacalSearch, setLocalSearch] = useState("");
    const {
        handleChangeN,
    } = useAppContext();

    const debounce = () => {
        let timeoutId;
        return (e) => {
            setLocalSearch(e.target.value);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                handleChangeN({ name: e.target.name, value: e.target.value });
            }, 1200);
        };
    };

    const optimizedDebounce = useMemo(() => debounce(), []);

    return (
        <Wrapper>
            <form className='nav-form' >
                <input name="searchN"
                    value={loacalSearch} onChange={optimizedDebounce} className='nav-input' type="text" placeholder="Search Posts/Authors" />
                <BsSearch className="search-container-searchIcon" />
            </form>
        </Wrapper>
    )
}

export default NavSearchComponent