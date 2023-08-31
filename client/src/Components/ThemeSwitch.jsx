import React from 'react'
import Wrapper from '../assets/Wrappers/ThemeSwitch'
import { useAppContext } from '../context/Context';
import { BsMoonStars, BsFillSunFill } from "react-icons/bs"
const ThemeSwitch = () => {

    const { toggleThemeMode, light_dark_mode, light_dark } = useAppContext()

    const handleThemeMode = () => {
        toggleThemeMode();
    };

    return (
        <Wrapper>
            <div style={{ transform: `${light_dark_mode ? "translateY(-25px)" : "translateY(0px)"}`, transition: "ease-in-out 0.3s" }} className="dark-light-icon-container">
                {/* {light_dark === "dark" ?  */}
                <BsMoonStars style={{ transform: `${light_dark_mode ? "rotate(180deg)" : "rotate(0)"}`, transition: "ease-in-out 0.3s" }} onClick={handleThemeMode} />
                <BsFillSunFill style={{ transform: `${light_dark_mode ? "rotate(180deg)" : "rotate(0)"}`, transition: "ease-in-out 0.3s", color: "#fff" }} onClick={handleThemeMode} /> :

                {/* }  */}
            </div>
        </Wrapper>
    )
}

export default ThemeSwitch