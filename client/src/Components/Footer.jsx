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

    return (
        <>
            {!userPath &&
                !userPathP &&
                !userPathC &&
                !userPathA &&
                !userPathE &&
                !userPathSP ?
                <div className="footer-container">
                    <div>©2023 shwebdev.in. All rights reserved.</div>
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