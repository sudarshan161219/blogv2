import React, { useState } from "react";
import {
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <main className="register-main">
      <div className='form-container'>
        <div className='heading-para'>
          <h1 className='form-heading'>Welcome to RBlog!</h1>
          <p className='form-para'>Sign up to get the most out of RBlog.</p>
        </div>

        <form>
          <div className='input-container'>
            <label htmlFor='email'>
              <AiOutlineMail className='aiIcons' />
            </label>
            <input
              className='input'
              id='email'
              type="email"
              placeholder='e.g. stephenking@lorem.com'
              required
            />
          </div>

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


          <div className='input-container'>
            <label htmlFor='confirm-password'>
              <AiOutlineKey className='aiIcons' />
            </label>

            <input
              className='input'
              id='confirm-password'
              type='password'
              placeholder='Confirm Password'
            />
          </div>

          <button type="submit" className="button-28" >Register</button>
        </form>
        <p>Already a member  <Link to="/login">Login here</Link> </p>
      </div>
    </main>
  );
};

export default Register;
