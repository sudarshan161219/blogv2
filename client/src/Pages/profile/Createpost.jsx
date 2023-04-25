import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
import EdittorWrapper from "../../assets/Wrappers/TextEditor";
import dummyImg from "../../assets/imgs/dummy-cover.jpg";
import { useAppContext } from "../../context/Context";
import { convertToBase64, handleImageUpload } from "../../utils/convert";
import { useQuill } from "react-quilljs";
import imageCompression from "browser-image-compression";

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
  const { createPost, handleContextSubmit, isLoading } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.coverImg = file;
    data.content = vquill;
    handleContextSubmit(data);
    console.log(data);
    createPost();
    // if (!isLoading) {
    //   e.currentTarget.reset();
    // }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onUpload = async (e) => {
 const event = e.target.files[0];
    const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      alwaysKeepResolution: true,
    }
    try {
      const compressedFile = await imageCompression(event, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
  
       const base64 = await convertToBase64(compressedFile);
      setFile(base64);
    } catch (error) {
      console.log(error);
    }



   
    // handleImageUpload(e.target.files[0]);
  };

  console.log(file);

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
                    name="cover-image"
                    onChange={onUpload}
                    accept="image/*"
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
                <button
                  type="submit"
                  disabled={isLoading}
                  className="button-28 quill-btn"
                >
                  {isLoading ? "Please wait...." : " Submit"}
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
