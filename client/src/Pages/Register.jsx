import React, { useState, useContext, useEffect } from "react";
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
import {registerFn} from "../Actions/Actions"
import { toast } from "react-toastify";

const Register = () => {
  const {

    password,
    setPassword,
    userEmail,
    setUserEmail,
    userName,
    setUserName,
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



  const CheckPass = password === Cpassword;

  const handleSubmit =  (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const values = [...formData.values()];
    const isEmpty = values.includes("");

    if (isEmpty) {
      toast.error("🦄 please provide all values!", {
        position: "top-right",
        autoClose: 3026,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const data = Object.fromEntries(formData);
    const {email, name, password} = data

    registerFn(email, name, password)
    e.currentTarget.reset();
    setUserName("");
    setUserEmail("");
    setPassword(""),
    setCPassword("")
  };

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

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <main className='register-main'>
      <div className='form-container'>
        <div className='heading-para'>
          <h1 className='form-heading'>Welcome to RBlog!</h1>
          <p className='form-para'>Sign up to get the most out of RBlog.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label htmlFor='email'>
              <AiOutlineMail className='aiIcons' />
            </label>
            <input
              className='input'
              id='email'
              name='email'
              type='email'
              value={userEmail}
              onChange={handleEmailChange}
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
              name='name'
              type='text'
              value={userName}
              onChange={handleNameChange}
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
              name='password'
              value={password}
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
             {password  &&  <AiOutlineKey className='aiIcons' />}
            </label>
            {Cpassword && !CheckPass &&  <Alert />}

         {password &&  <input
              className='input'
              id='confirm-password'
              type={CtogglePass}
              value={Cpassword}
              onChange={handleChangePasswordConfirm}
              placeholder='Confirm Password'
            /> } 

            {Cpassword &&
              ( Cvisible ? (
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

          <button
            type='submit'
            className='button-28'
            disabled={!CheckPass ? true : false}
          >
            Register
          </button>
        </form>
        <p className='form-para'>
          Already a member
          <Link className='form-link Link' to='/login'>
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
