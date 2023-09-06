import React from 'react'
import { useAppContext } from "../context/Context";


const Heading = ({children }) => {
  const {light_dark} = useAppContext()
  return (
    <h1 className={`globalHeading ${light_dark}`}>{ children }</h1>
  )
}

export default Heading