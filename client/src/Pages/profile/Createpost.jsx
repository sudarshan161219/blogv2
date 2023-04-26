import React, { useState, useRef, useCallback, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
import EdittorWrapper from "../../assets/Wrappers/TextEditor";
import dummyImg from "../../assets/imgs/dummy-cover.jpg";
import { useAppContext } from "../../context/Context";
import { convertToBase64 } from "../../utils/convert";
import { useQuill } from "react-quilljs";
import imageCompression from "browser-image-compression";
import { Toaster, toast } from "react-hot-toast";
import Select from "react-select";

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
  // const tagOptions = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.coverImg = file;
    data.content = vquill;
    handleContextSubmit(data);

    const { title, summary, coverImg, content } = data;

    if ((title, summary, coverImg, content)) {
      createPost();
      e.currentTarget.reset();
    } else {
      toast.error("please provide all values");
    }
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
    };
    try {
      const compressedFile = await imageCompression(event, options);
      const base64 = await convertToBase64(compressedFile);
      setFile(base64);
    } catch (error) {
      console.log(error);
    }
  };

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
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="row">
          <form onSubmit={handleSubmit} className="quill-form">
            <h3> Create Post </h3>
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
                    onChange={onUpload}
                    accept="image/*"
                  />
                </div>
              </div>

              {/* <Select
                  defaultValue={[tagOptions[2], tagOptions[3]]}
                  isMulti
                  name="colors"
                  options={tagOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                /> */}

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
