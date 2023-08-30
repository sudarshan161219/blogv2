import React from 'react'
import { useAppContext } from "../context/Context";


const Paragraph = ({ children }) => {
    const { light_dark } = useAppContext
    return (
        <p className={`globalParagraph ${light_dark}`}>{children}</p>
    )
}

export default Paragraph