import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

const NavItems = () => {
  return (
    <div className='nav-items '>
    <Link
      className='nav-link register Link nav-btn register-btn button-28'
      to='/register'
    >
      Login
    </Link>
</div>
  )
}

export default NavItems