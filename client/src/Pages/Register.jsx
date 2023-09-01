import React, { useState, useContext, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Components/export";
import { useAppContext } from "../context/Context";
import gif from "../assets/Rolling-0.7s-157px.svg";

const initialState = {
  name: "",
  email: "",
  password: "",
  Cpassword: "",
  togglePass: "password",
  CtogglePass: "password",
  visible: false,
  Cvisible: false,
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [togglePass, setTogglePass] = useState("password");
  const { user, isLoading, registerFn, loginFn, light_dark } = useAppContext();
  const { password, visible, isMember } = values;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/user-profile");
      }, 1100);
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (isMember) {
      loginFn(data);
    } else {
      registerFn(data);
    }

    e.currentTarget.reset();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const togglePassword = () => {
    if (togglePass === "password") {
      setTogglePass("text");
      setValues({ ...values, visible: !values.visible });
      return;
    }
    setTogglePass("password");
    setValues({ ...values, visible: !values.visible });
  };

  const addUserInfo = () => {
    setValues({ ...values, email: "testuser@gmail.com", password: "testuser" });
  };

  return (
    <main className={`register-main ${light_dark}`}>
      <div className="form-container">
        <div className="heading-para">
          <Logo />
          <h3 className={`form-heading ${light_dark}`} >
            {values.isMember ? "Welcome back!" : "Welcome to RBlog!"}
          </h3>
          <h5 className={`form-heading ${light_dark}`}>
            {values.isMember ? "Login" : "Register"}
          </h5>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {!values.isMember && (
            <div className="input-container">
              {/* <label htmlFor="name"> */}
                <AiOutlineUser className="aiIcons" />
              {/* </label> */}

              <input
                className="input"
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="e.g. Stephen King"
              />
            </div>
          )}

          <div className="input-container">
            {/* <label htmlFor="email"> */}
              <AiOutlineMail className="aiIcons" />
            {/* </label> */}
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="e.g. stephenking@lorem.com"
              required
            />
          </div>

          <div className="input-container password-container">

              <AiOutlineKey className="aiIcons" />


            <input
              className="input"
              id="password"
              name="password"
              value={values.password}
              type={togglePass}
              onChange={handleChange}
              placeholder="Password"
            />
            {password &&
              (visible ? (
                <AiOutlineEyeInvisible
                  className=" eye-icon"
                  onClick={togglePassword}
                />
              ) : (
                <AiOutlineEye
                  className=" eye-icon"
                  onClick={togglePassword}
                />
              ))}
          </div>
          <div className="guest-btn">
            <button type="submit" className="button-4" disabled={isLoading}>
              {isLoading ? (
                <img className="gif" src={gif} alt="gif" />
              ) : !values.isMember ? (
                "Register "
              ) : (
                "Login"
              )}
            </button>


            {values.isMember && (
              <button
                onClick={addUserInfo}
                type="submit"
                className="button-4 guest-btn-btn"
                disabled={isLoading}
              >
                login as guest
              </button>
            )}
          </div>
        </form>
        <p className="form-para">
          {values.isMember ? "Not a member yet ? " : "Already a member ? "}
          <button
            type="button "
            onClick={toggleMember}
            className="member"
          >
            {values.isMember ? "Register " : "Login"}
          </button>
        </p>
      </div>
    </main>
  );
};

export default Register;
