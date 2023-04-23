import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
import EdittorWrapper from "../../assets/Wrappers/TextEditor";
import dummyImg from "../../assets/imgs/dummy-cover.jpg";

import convertToBase64 from "../../utils/convert";
import { useQuill } from "react-quilljs";

import {
  TOOLBAR_OPTIONS,
  formats,
  theme,
  placeholder,
  modules,
} from "../../utils/tools";

const initialState = {
  title: "",
  summary: "",
};

const Createpost = () => {
  const [value, setValue] = useState(initialState);
  const [file, setFile] = useState();
  const [vquill, setVQuill] = useState();
  const { quill, quillRef, Quill } = useQuill({
    modules,
    formats,
    placeholder,
    theme,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.coverImg = file;
    data.content = vquill;

    console.log(data);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  // const wrapperRef = useCallback((wrapper) => {
  //   if (wrapper == null) return;
  //   wrapper.innerHTML = "";

  //   const editor = document.createElement("div");
  //   wrapper.append(editor);

  //   // var quill = new Quill(editor, {
  //   //   theme: "snow",
  //   //   name: "content",
  //   //   placeholder: "write something awesome :)",

  //   //   modules: {
  //   //     toolbar: {
  //   //       container: TOOLBAR_OPTIONS,
  //   //       handlers: {
  //   //         undo: myUndo,
  //   //         redo: myRedo,
  //   //       },
  //   //       history: {
  //   //         delay: 2000,
  //   //         maxStack: 500,
  //   //         userOnly: true,
  //   //       },
  //   //     },
  //   //   },
  //   // });

  //   function myUndo() {
  //     quill.history.undo();
  //   }

  //   function myRedo() {
  //     quill.history.redo();
  //   }
  //   if (quill) {
  //     quill.on("text-change", () => {
  //       setVQuill();
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setVQuill(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <form onSubmit={handleSubmit} className="quill-form">
            <h3> Add </h3>
            <div className="form-row">
              <div className="input-container">
                <label className="title-input">
                  Title
                  <input
                    type="text"
                    name="title"
                    // value={userInfo.title}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Title"
                    required
                  />
                </label>

                <label className="title-input">
                  Summary
                  <input
                    type="summary"
                    name="summary"
                    placeholder="summary"
                    id="summary"
                    // value={summary}
                    onChange={handleChange}
                  />
                </label>

                <div className="cover-img-container">
                  <span>Cover image</span>
                  <label className="image-label" htmlFor="cover-image">
                    <img
                      className="cover-img"
                      src={file || dummyImg}
                      alt="loading"
                    />
                  </label>
                  <input
                    type="file"
                    id="cover-image"
                    // name="file"
                    onChange={onUpload}
                    accept=".jpg,.png,.jpeg"
                  />
                </div>
              </div>


              <EdittorWrapper>
                <div
                  ref={quillRef}
                  formats={formats}
                  modules={TOOLBAR_OPTIONS}
                />
              </EdittorWrapper>


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
