import React from 'react'
import { Link } from "react-router-dom";

const  Navlinks = () => {
  return (
    <ul>
    <li>
      <Link className="Link " to="/">Home</Link>
    </li>
    <li>
      <Link className="Link " to="/tags">Tags</Link>
    </li>
    <li>
      <Link className="Link " to="/about">About</Link>
    </li>
  </ul>
  )
}

export default Navlinks