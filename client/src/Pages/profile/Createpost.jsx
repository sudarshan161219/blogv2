import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
import { TextEditor} from "../../Components/export"

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
              <div className="title-input">
                <label className="font-weight-bold">
                  Title <span className="required"> * </span>
                </label>
                <input
                  type="text"
                  name="title"
                  // value={userInfo.title}
                  // onChange={onChangeValue}
                  className="form-control"
                  placeholder="Title"
                  required
                />
              </div>
              <br />
              <TextEditor/>
 
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
