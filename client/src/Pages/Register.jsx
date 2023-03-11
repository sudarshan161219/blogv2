import React, { useState, useContext } from "react";
import {
  AiOutlineMail,
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Alert from "../Alert/Alert";

const Register = () => {
  const {
    password,
    setPassword,
    togglePass,
    setTogglePass,
    visible,
    setVisible,
    Cpassword,
    setCPassword,
    CtogglePass,
    setCTogglePass,
    Cvisible,
    setCVisible,
  } = useContext(Context);

  const togglePassword = () => {
    if (togglePass === "password") {
      setTogglePass("text");
      setVisible(false);
      return;
    }
    setTogglePass("password");
    setVisible(true);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordConfirm = () => {
    if (CtogglePass === "password") {
      setCTogglePass("text");
      setCVisible(false);
      return;
    }
    setCTogglePass("password");
    setCVisible(true);
  };

  const handleChangePasswordConfirm = (e) => {
    setCPassword(e.target.value);
  };

  const CheckPass = password === Cpassword;

  return (
    <main className='register-main'>
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
              type='email'
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

          <div className='input-container password-container'>
            <label htmlFor='password'>
              <AiOutlineKey className='aiIcons' />
            </label>

            <input
              className='input'
              id='password'
              type={togglePass}
              onChange={handleChange}
              placeholder='Password'
            />
            {password &&
              (visible ? (
                <AiOutlineEyeInvisible
                  className='aiIcons eye-icon'
                  onClick={togglePassword}
                />
              ) : (
                <AiOutlineEye
                  className='aiIcons eye-icon'
                  onClick={togglePassword}
                />
              ))}
          </div>

          <div className='input-container password-container'>
            <label htmlFor='confirm-password'>
              <AiOutlineKey className='aiIcons' />
            </label>
            {!CheckPass && Cpassword && <Alert />}
            <input
              className='input'
              id='confirm-password'
              type={CtogglePass}
              onChange={handleChangePasswordConfirm}
              placeholder='Confirm Password'
            />
            {Cpassword &&
              (Cvisible ? (
                <AiOutlineEyeInvisible
                  className='aiIcons eye-icon'
                  onClick={togglePasswordConfirm}
                />
              ) : (
                <AiOutlineEye
                  className='aiIcons eye-icon'
                  onClick={togglePasswordConfirm}
                />
              ))}
          </div>

          <button type='submit' className='button-28'>
            Register
          </button>
        </form>
        <p className='form-para'>
          Already a member{" "}
          <Link className='form-link Link' to='/login'>
            Login here
          </Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Register;
