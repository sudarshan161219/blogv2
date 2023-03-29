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
import { Toaster } from "react-hot-toast";
import gif from "../assets/Rolling-1s-31px.svg";

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
  const { user, isLoading, registerFn, loginFn } = useAppContext();
  const { password, visible, isMember } = values;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(
        () => {
          navigate("/");
        },
        3000
      );
    }
  },[user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const values = [...formData.values()];

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

  return (
    <main className="register-main">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="form-container">
        <div className="heading-para">
          <Logo />
          {/* <h1 className="form-heading">Welcome to RBlog!</h1>
          <p className="form-para">Sign up to get the most out of RBlog.</p> */}
          <h3 className="form-heading">
            {values.isMember ? "Login" : "Register"}
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          {!values.isMember && (
            <div className="input-container">
              <label htmlFor="name">
                <AiOutlineUser className="aiIcons" />
              </label>

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
            <label htmlFor="email">
              <AiOutlineMail className="aiIcons" />
            </label>
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
            <label htmlFor="password">
              <AiOutlineKey className="aiIcons" />
            </label>

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
                  className="aiIcons eye-icon"
                  onClick={togglePassword}
                />
              ) : (
                <AiOutlineEye
                  className="aiIcons eye-icon"
                  onClick={togglePassword}
                />
              ))}
          </div>

          <button type="submit" className="button-28" disabled={isLoading}>
            {isLoading ? (
              <img className="gif" src={gif} alt="gif" />
            ) : !values.isMember ? (
              "Register "
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="form-para">
          {values.isMember ? "Not a member yet ? " : "Already a member ? "}
          <button
            type="button "
            onClick={toggleMember}
            className="isMember-btn"
          >
            {values.isMember ? "Register " : "Login"}
          </button>
        </p>
      </div>
    </main>
  );
};

export default Register;
