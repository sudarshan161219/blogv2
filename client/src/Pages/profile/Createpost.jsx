import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
import { TextEditor } from "../../Components/export";
import dummyImg from "../../assets/imgs/dummy-cover.jpg";

const Createpost = () => {
  const [value, setValue] = useState("");

  const addDetails = () => {};

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <form onSubmit={addDetails} className="quill-form">
            <h3> Add </h3>
            <div className="form-row">
              <div className="input-container">
                <label className="title-input">
                  Title
                  <input
                    type="text"
                    name="title"
                    // value={userInfo.title}
                    onChange={(e) => console.log()}
                    className="form-control"
                    placeholder="Title"
                    required
                  />
                </label>

                <label className="title-input">
                  Summary
                  <input
                    type="summary"
                    placeholder="summary"
                    id="summary"
                    // value={summary}
                    onChange={(e) => console.log()}
                  />
                </label>

                <div className="cover-img-container">
                  <span>Cover image</span>
                  <label className="image-label" htmlFor="cover-image">
                    <img className="cover-img" src={dummyImg} alt="loading" />
                  </label>
                  <input
                    type="file"
                    id="cover-image"
                    name="file"
                    onChange={(e) => console.log()}
                    accept=".jpg,.png,.jpeg"
                  />
                </div>
              </div>

              <TextEditor />

              <div className="btn-container">
                <button type="submit" className="button-28 quill-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Createpost;
