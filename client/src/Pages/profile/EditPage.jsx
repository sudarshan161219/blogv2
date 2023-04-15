import React, { useState } from "react";
import Wrapper from "../../assets/Wrappers/EditPage";
import profile from "../../assets/imgs/profile.png";
import { BsLink45Deg } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const initialState = {
  name: "",
  info: "",
  pLink: "",
  tLink: "",
  iLink: "",
  lLink: "",
};

const EditPage = () => {
  const [values, setValues] = useState(initialState);

  const onUpload = () => {
    console.log("img");
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    e.currentTarget.reset();
  };

  return (
    <Wrapper>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="img-input-container">
          <label htmlFor="profile">
            <img className="profile-img" src={profile || avatar} alt="avatar" />
          </label>
          <input
            className="file-input"
            type="file"
            name="profile"
            id="profile"
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
              placeholder="name"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="info" className="textarea-label">
            <AiOutlineInfoCircle className="label-icons" />
            <textarea
              name="info"
              id="info"
              cols="30"
              placeholder="about your self"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </label>

          <label htmlFor="personal-link" className="social-label">
            <BsLink45Deg className="label-icons" />
            <input
              type="text"
              name="pLink"
              id="personal-link"
              placeholder="personal website"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="twitter" className="social-label">
            <AiOutlineTwitter className="label-icons" />
            <input
              type="text"
              name="tLink"
              id="twitter"
              placeholder="twitter"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="instagram" className="social-label">
            <AiFillInstagram className="label-icons" />
            <input
              type="text"
              name="insLink"
              id="instagram"
              placeholder="instagram"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="linkden" className="social-label">
            <AiFillLinkedin className="label-icons" />
            <input
              type="text"
              name="lLink"
              id="linkden"
              placeholder="linkden"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="button-28 btn-profile">
          Update
        </button>
      </form>
    </Wrapper>
  );
};

export default EditPage;
