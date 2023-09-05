import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/Wrappers/Createpost";
import EdittorWrapper from "../../assets/Wrappers/TextEditor";
import dummyImg from "../../assets/imgs/dummy-cover.webp";
import { useAppContext } from "../../context/Context";
import { Heading } from "../../Components/export"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import imageCompression from "browser-image-compression";
import { toast } from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Select from "react-select";
import { convertToBase64 } from "../../utils/convert";
import { options } from "../../utils/categoryList";
import { IoMdAddCircleOutline } from "react-icons/io"
import {
  formats,
  placeholder,
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
    editPostId,
    light_dark
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

  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }


  useEffect(() => {
    if (isEditing) {
      setVQuill(htmlDecode(content) || content);
      if (file === undefined) {
        setFile(coverImg);
      } else if (file !== undefined) {
        setFile(file);
      }
    }

    if (created) {
      setTimeout(() => {
        navigate("/user-profile/profile");
      }, 1100);
    }

    if (edited) {
      setTimeout(() => {
        navigate(`/user-profile/${editPostId}`);
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
      e.currentTarget.reset();;
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


  const addTag = (e) => {
    e.preventDefault();


    if (input === "") { return }
    else {
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
      <Wrapper className={`create-post-container ${light_dark}`}>
        <Heading> {isEditing ? "Edit Post" : "Create Post"} </Heading>
        <div className="row">
          <form onSubmit={handleSubmit} className="quill-form">
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
                  <div className="tag-title-input-container">
                    <input
                      value={input}
                      placeholder="add tag"
                      onChange={onChange}
                      className="tag-input"
                    />
                    <IoMdAddCircleOutline className="add-tag-btn" onClick={addTag} />

                  </div>

                  {newTag.length !== 0 || tags.length !== 0 ? <div>
                    {isEditing ?
                      <ul className="tag-container">
                        {newTag.map((tag, index) =>
                        (
                          <li key={index} className="tag">{tag}
                            <AiOutlineCloseCircle
                              onClick={() => deleteTag(index)}
                              className="tag-delete-icon"
                            />
                          </li>
                        )
                        )}
                      </ul>
                      :
                      <ul className="tag-container">
                        {tags.map((tag, index) =>
                        (
                          <li key={index} className="tag">{tag}
                            <AiOutlineCloseCircle
                              onClick={() => deleteTag(index)}
                              className="tag-delete-icon"
                            />
                          </li>
                        )
                        )}
                      </ul>
                    }
                  </div> : null}

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
                  className="button-4 quill-btn"
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
