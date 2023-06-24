import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/Wrappers/Createpost";
import EdittorWrapper from "../../assets/Wrappers/TextEditor";
import dummyImg from "../../assets/imgs/dummy-cover.webp";
import { useAppContext } from "../../context/Context";
// import { useQuill } from "react-quilljs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import imageCompression from "browser-image-compression";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Select from "react-select";
import { convertToBase64 } from "../../utils/convert";
import { options } from "../../utils/categoryList";
import {
  TOOLBAR_OPTIONS,
  formats,
  theme,
  placeholder,
  modules,
  modulesTool,
} from "../../utils/tools";

const initialState = {
  title: "",
  content: "",
};

const Createpost = () => {
  const {
    title,
    coverImg,
    content,
    postTags: newTag,
    category,
    createPost,
    isLoading,
    isEditing,
    editPost,
    created,
    edited,
  } = useAppContext();
  const [value, setValue] = useState(initialState);
  const [file, setFile] = useState();
  const [vquill, setVQuill] = useState("");
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    isEditing ? category : null
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      setVQuill(content);
      if (file === undefined) {
        setFile(coverImg);
      } else if (file !== undefined) {
        setFile(file);
      }
    }

    if (created) {
      setTimeout(() => {
        navigate("/user-profile/author-post");
      }, 1100);
    }

    if (edited) {
      setTimeout(() => {
        navigate("/user-profile/author-post");
      }, 1100);
    }
  }, [input, edited, created, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.coverImg = file;
    data.content = vquill;
    data.postTags = isEditing ? newTag : tags;
    data.category = selectedOption;

    const { title, coverImg, content, postTags, category } = data;

    if (isEditing) {
      editPost(data);
      e.currentTarget.reset();
      return;
    }

    if (!title || !coverImg || !content || !postTags || !category) {
      toast.error("please provide all values");
    } else {
      createPost(data);
      e.currentTarget.reset();
    }
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpload = async (e) => {
    const event = e.target.files[0];
    const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 500,
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

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };



  // const onKeyDown = (e) => {
  //   const { key } = e;
  //   const trimmedInput = input.trim();
  //   if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
  //     e.preventDefault();
  //     setTags((prevState) => [...prevState, "#" + trimmedInput]);
  //     setInput(" ");
  //     if (isEditing) {
  //       newTag.push("#" + trimmedInput);
  //       const merge = [...tags, ...newTag];
  //       let uniqueChars = [...new Set(merge)];
  //       setTags(uniqueChars);
  //       setInput("");
  //     }
  //   }
  // };

  const addTag = (e) => {
    e.preventDefault();
  

    if(input === "") {return}
    else{
        const trimmedInput = input.trim();
        setTags((prevState) => [...prevState, "#" + trimmedInput]);
        setInput("");

        if (isEditing) {
          newTag.push("#" + trimmedInput);
          const merge = [...tags, ...newTag];
          let uniqueChars = [...new Set(merge)];
          setTags(uniqueChars);
          setInput("");
        }
    }
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
    if (isEditing) {
      newTag.pop(index);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <>
      <Wrapper className="container">
        {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}
        <div className="row">
          <form onSubmit={handleSubmit} className="quill-form">
            <h3> {isEditing ? "Edit Post" : "Create Post"} </h3>
            <div className="form-row">
              <div className="input-container">
                <label className="title-input">
                  Title
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Title"
                    required
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

              <div className="tag-select">
                <Select
                  defaultValue={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                />

                <div className="tags-container">
                  <div className="container tag-title-input">
                    {isEditing
                      ? newTag.map((tag, index) => (
                          <div key={index} className="tag-container">
                            <div className="tag">{tag}</div>
                            <AiOutlineCloseCircle
                              onClick={() => deleteTag(index)}
                              className="tag-delete-icon"
                            />
                          </div>
                        ))
                      : tags.map((tag, index) => (
                          <div key={index} className="tag-container">
                            <div className="tag">{tag}</div>
                            <AiOutlineCloseCircle
                              onClick={() => deleteTag(index)}
                              className="tag-delete-icon"
                            />
                          </div>
                        ))}
                    <input
                      value={input}
                      placeholder="add tag"
                      onChange={onChange}
                    />
                  </div>
                  <button className="add-tag-btn" onClick={addTag}>
                    add Tag
                  </button>
                </div>
              </div>
              <EdittorWrapper>
                <ReactQuill
                  modules={modulesTool}
                  formats={formats}
                  theme="snow"
                  value={vquill}
                  placeholder={placeholder}
                  onChange={setVQuill}
                />
              </EdittorWrapper>

              <div className="btn-container">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="button-28 quill-btn"
                >
                  {isLoading
                    ? "Please wait...."
                    : isEditing
                    ? "edit"
                    : "Submit"}
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
