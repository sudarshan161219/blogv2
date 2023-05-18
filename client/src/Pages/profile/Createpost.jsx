import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
import EdittorWrapper from "../../assets/Wrappers/TextEditor";
import dummyImg from "../../assets/imgs/dummy-cover.jpg";
import { useAppContext } from "../../context/Context";
import { useQuill } from "react-quilljs";
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
} from "../../utils/tools";

const initialState = {
  title: "",
  summary: "",
};

const Createpost = () => {
  const {
    title,
    summary,
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
  const [vquill, setVQuill] = useState();
  const { quill, quillRef, Quill } = useQuill({
    modules,
    formats,
    placeholder,
    theme,
  });
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedOption, setSelectedOption] = useState(isEditing ? category : null);
  const navigate = useNavigate();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", function (delta, oldDelta, source, editor) {
        setVQuill(quillRef.current.firstChild.innerHTML);
      });
    }
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
        navigate("/user-profile/all-posts");
      }, 1100);
    }

    if (edited) {
      setTimeout(() => {
        navigate("/user-profile/all-posts");
      }, 1100);
    }

  }, [quill, edited, created, navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.coverImg = file;
    data.content = vquill;
    data.postTags = isEditing ? newTag : tags;
    data.category = selectedOption;

    const { title, summary, coverImg, content, postTags, category } = data;

    if (isEditing) {
      editPost(data);
      e.currentTarget.reset();
      return;
    }

    if (!title || !summary || !coverImg || !content || !postTags || !category) {
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

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
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

    if (key === "Backspace" && !input.length && tags.length) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      setTags(tagsCopy);
      setInput(poppedTag);
    }
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
    if (isEditing) {
      newTag.pop(index);
    }
  };

  const handleSelectChange =  (e) => {
    setSelectedOption(e.value)
 }



  return (
    <>
      <Wrapper className="container">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
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

                <label className="title-input">
                  Summary
                  <input
                    type="summary"
                    name="summary"
                    placeholder="summary"
                    id="summary"
                    defaultValue={summary}
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

              <div className="tag-select">
                <Select
                  defaultValue={selectedOption}
                  onChange={handleSelectChange }
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
                      defaultValue={input}
                      // value={input}
                      placeholder={`press " , " (comma) to add tag`}
                      onKeyDown={onKeyDown}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <EdittorWrapper>
                <div
                  ref={quillRef}
                  formats={formats}
                  modules={TOOLBAR_OPTIONS}
                  dangerouslySetInnerHTML={{ __html: content }}
                  // value={quill}
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
