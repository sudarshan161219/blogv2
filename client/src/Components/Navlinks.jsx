import React from 'react'
import { Link } from "react-router-dom";
import { useAppContext } from '../context/Context';
const  Navlinks = () => {

  const { toggleSidebar} = useAppContext();

  return (
    <ul>
    <li>
      <Link onClick={toggleSidebar} className="Link " to="/">Home</Link>
    </li>
    <li>
      <Link onClick={toggleSidebar} className="Link " to="/tags">Tags</Link>
    </li>
    <li>
      <Link onClick={toggleSidebar} className="Link " to="/about">About</Link>
    </li>
  </ul>
  )
}

export default Navlinks