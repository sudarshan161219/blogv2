import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
const Createpost = () => {
  const [value, setValue] = useState("");


  const addDetails = () => {

  }
 
  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <form onSubmit={addDetails} className="quill-form">
            <h3 > Add </h3>
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
              <div className="clearfix"></div>
              <div className="form-group col-md-12 editor">
                <label className="font-weight-bold">
                  Description <span className="required"> * </span>
                </label>
                {/* <EditorToolbar toolbarId={"t1"} /> */}
                <ReactQuill
                  theme="snow"
                  // value={userInfo.description}
                  // onChange={ondescription}
                  placeholder={"Write something awesome..."}
                  // modules={modules("t1")}
                  // formats={formats}
                />
              </div>
              <br />
              <div className="form-group col-md-12 editor">
                <label className="font-weight-bold">
                  Additional Information{" "}
                </label>
                {/* <EditorToolbar toolbarId={"t2"} /> */}
                <ReactQuill
                  theme="snow"
                  // value={userInfo.information}
                  // onChange={oninformation}
                  placeholder={"Write something awesome..."}
                  // modules={modules('t2')}
                  // formats={formats}
                />
              </div>
              <br />
              {/* {isError !== null && <div className="errors"> {isError} </div>} */}
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
