import React from 'react'
import {
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <main className="register-main">
    <div className='form-container'>
      <div className='heading-para'>
        <h1 className='form-heading'>Welcome Back!</h1>
        <p className='form-para'>Sign in to get the most out of RBlog.</p>
      </div>

      <form>

        <div className='input-container'>
          <label htmlFor='name'>
            <AiOutlineUser className='aiIcons' />
          </label>

          <input
            className='input'
            id='name'
            type='text'
            placeholder='e.g. Stephen King'
          />
        </div>

        <div className='input-container'>
          <label htmlFor='password'>
            <AiOutlineKey className='aiIcons' />
          </label>

          <input
            className='input'
            id='password'
            type='password'
            placeholder='Password'
          />
        </div>

          <button type="submit" className="button-28" >Login</button>

      </form>


<p>Not a member yet  <Link to="/register">Register here</Link> </p>
    </div>
  </main>
  )
}

export default Login