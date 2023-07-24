import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../assets/Wrappers/EditPage";
import profile from "../../assets/imgs/profile.png";
import { BsLink45Deg } from "react-icons/bs";
import { convertToBase64 } from "../../utils/convert";
import { useAppContext } from "../../context/Context";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineUser,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const initialState = {
  name: "",
  userInfo: "",
  userImg: null,
  personalLink: "",
  twitter: "",
  instagram: "",
  linkden: "",
};

const EditPage = () => {
  const {
    updateUserFn,
    isLoading,
    setEditUser,
    isEditing,
    name,
    userInfo,
    instagram,
    twitter,
    linkden,
    personalLink,
    userImg,
    edited,
    token
  } = useAppContext();
  const [values, setValues] = useState(initialState);
  const [file, setFile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setEditUser();
    if (file === undefined || " ") {
      setFile(userImg);
    } else {
      setFile(file);
    }
    if (edited) {
      setTimeout(() => {
        navigate("/user-profile/profile");
      }, 1100);
    }
  }, [isEditing, edited, navigate,   token]);

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const handleChange = async (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.userImg = file;
    updateUserFn(data);
    e.currentTarget.reset();
  };

  return (
    <Wrapper>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Link to="/user-profile" className="edit-btn button-28">
        back to Dashboard
      </Link>
      <form
        className="profile-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="img-input-container">
          <label htmlFor="profile">
            <img className="profile-img" src={file || profile} alt="avatar" />
          </label>
          <input
            className="file-input"
            type="file"
            id="profile"
            accept=".jpg,.png,.jpeg"
            onChange={onUpload}
          />
        </div>
        <div className="input-container">
          <label htmlFor="name" className="social-label">
            <AiOutlineUser className="label-icons" />
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={name}
              placeholder="name"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="info" className="textarea-label">
            <AiOutlineInfoCircle className="label-icons" />
            <textarea
              name="userInfo"
              id="info"
              cols="30"
              placeholder="about your self"
              rows="10"
              defaultValue={userInfo}
              onChange={handleChange}
            ></textarea>
          </label>

          <label htmlFor="personal-link" className="social-label">
            <BsLink45Deg className="label-icons" />
            <input
              type="text"
              name="personalLink"
              id="personal-link"
              placeholder="personal website"
              defaultValue={personalLink}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="twitter" className="social-label">
            <AiOutlineTwitter className="label-icons" />
            <input
              type="text"
              name="twitter"
              id="twitter"
              placeholder="twitter"
              defaultValue={twitter}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="instagram" className="social-label">
            <AiFillInstagram className="label-icons" />
            <input
              type="text"
              name="instagram"
              id="instagram"
              placeholder="instagram"
              defaultValue={instagram}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="linkden" className="social-label">
            <AiFillLinkedin className="label-icons" />
            <input
              type="text"
              name="linkden"
              id="linkden"
              placeholder="linkden"
              defaultValue={linkden}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="button-28 btn-profile"
        >
          {isLoading ? "Please wait...." : "save"}
        </button>
      </form>
    </Wrapper>
  );
};

export default EditPage;
