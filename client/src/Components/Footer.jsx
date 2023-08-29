import React from 'react'
import { useLocation } from "react-router-dom";
import { useAppContext } from '../context/Context';
const Footer = () => {
    const { postId } = useAppContext();
    const location = useLocation()


    const userPath = location.pathname === "/user-profile";
    const userPathP = location.pathname === "/user-profile/profile";
    const userPathC = location.pathname === "/user-profile/createpost";
    const userPathA = location.pathname === `/user-profile/author-post`;
    const userPathE = location.pathname === "/user-profile/edit";
    const userPathSP = location.pathname === `/user-profile/${postId}`;
    const userPathS = location.pathname === "/user-profile/savedpost";

    return (
        <>
            {!userPath &&
                !userPathP &&
                !userPathC &&
                !userPathA &&
                !userPathE &&
                !userPathS &&
                !userPathSP ?
                <div className="footer-container">
                    <p>©2023 shwebdev.in. All rights reserved.</p>
                    <div className="social-links">
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                : null}

        </>
    )
}

export default Footer