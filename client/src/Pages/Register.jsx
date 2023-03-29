import React, { useState, useContext, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/Context";
import Alert from "../Alert/Alert";
import { Toaster } from "react-hot-toast";


const initialState = {
  name: "",
  email: "",
  password: "",
  Cpassword: "",
  togglePass: "password",
  CtogglePass: "password",
  visible: false,
  Cvisible: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [togglePass, setTogglePass] = useState("password");
  const [CtogglePass, setCTogglePass] = useState("password");

  const { isLoading, registerFn } = useAppContext();

  const { name, password, email, Cpassword, visible } = values;

  const CheckPass = password === Cpassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const values = [...formData.values()];
    const isEmpty = values.includes("");

    const data = Object.fromEntries(formData);
    if(data.Cpassword){
       delete data.Cpassword
    }
    registerFn(data);
    e.currentTarget.reset();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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

  const togglePasswordConfirm = () => {
    if (CtogglePass === "password") {
      setCTogglePass("text");
      setValues({ ...values, Cvisible: !values.Cvisible });

      return;
    }
    setCTogglePass("password");
    setValues({ ...values, Cvisible: !values.Cvisible });
  };

  return (
    <main className="register-main">
      <div className="form-container">
        <div className="heading-para">
          <h1 className="form-heading">Welcome to RBlog!</h1>
          <p className="form-para">Sign up to get the most out of RBlog.</p>
        </div>

        <form onSubmit={handleSubmit}>
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

          <div className="input-container password-container">
            <label htmlFor="confirm-password">
              {password && <AiOutlineKey className="aiIcons" />}
            </label>
            {Cpassword && !CheckPass && <Alert />}

            {password && (
              <input
                className="input"
                id="confirm-password"
                name="Cpassword"
                type={CtogglePass}
                value={values.Cpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            )}

            {Cpassword &&
              (values.Cvisible ? (
                <AiOutlineEyeInvisible
                  className="aiIcons eye-icon"
                  onClick={togglePasswordConfirm}
                />
              ) : (
                <AiOutlineEye
                  className="aiIcons eye-icon"
                  onClick={togglePasswordConfirm}
                />
              ))}
          </div>

          <button
            type="submit"
            className="button-28"
            disabled={!CheckPass ? true : false}
          >
            Register
            {/* {isLoading ? "loading" : "Register"} */}
          </button>
        </form>
        <p className="form-para">
          Already a member
          <Link className="form-link Link" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
