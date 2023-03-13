import React, { useState, useContext } from "react";
import {
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { toast } from "react-toastify";
import { loginFn } from "../Actions/Actions";

const Login = () => {
  const {
    password,
    setPassword,
    togglePass,
    setTogglePass,
    visible,
    setVisible,
  } = useContext(Context);

  const handleSubmit = (e) => {
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
    const { name, password } = data;
    loginFn(name, password)
console.log(data);
    e.currentTarget.reset();
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

  return (
    <main className='register-main'>
      <div className='form-container'>
        <div className='heading-para'>
          <h1 className='form-heading'>Welcome Back!</h1>
          <p className='form-para'>Sign in to get the most out of RBlog.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label htmlFor='name'>
              <AiOutlineUser className='aiIcons' />
            </label>

            <input
              className='input'
              id='name'
              name='name'
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
              name='password'
              type={togglePass}
              placeholder='Password'
              onChange={handleChange}
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

          <button type='submit' className='button-28'>
            Login
          </button>
        </form>

        <p className='form-para'>
          Not a member yet{" "}
          <Link className='form-link Link' to='/register'>
            Register here
          </Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
