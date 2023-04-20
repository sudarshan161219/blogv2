import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Wrapper from "../../assets/Wrappers/Createpost";


const Createpost = () => {
  const [value, setValue] = useState("");

  const addDetails = () => {};
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World!</p>',
  })
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
              <EditorContent editor={editor} />
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
