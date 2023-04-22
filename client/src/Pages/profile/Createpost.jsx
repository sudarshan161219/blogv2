import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../../assets/Wrappers/Createpost";
import EdittorWrapper from "../../assets/Wrappers/TextEditor";
import dummyImg from "../../assets/imgs/dummy-cover.jpg";
var icons = ReactQuill.Quill.import("ui/icons");
import { useQuill } from "react-quilljs";
icons["undo"] = "UNDO";
icons["redo"] = "REDO";

var icons = Quill.import("ui/icons");
icons["undo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  </svg>`;
icons["redo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  </svg>`;

const initialState = {
  title: "",
  summary: "",
};

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ direction: "rtl" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ font: [] }],
  [{ align: [] }],
  ["image", "video", "link"],
  ["blockquote", "code-block"],
  ["clean"],
  [{ undo: "undo" }, { redo: "redo" }],
];


const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "list",
  "indent",
  "size",
  "header",
  "link",
  "image",
  "video",
  "color",
  "background",
  "code-block",
  "clean",
  "undo",
  "redo",
];

const LInk = (value) => {
  if (value) {
    var href = prompt("Enter the URL");
    this.quill.format("link", href);
  } else {
    this.quill.format("link", false);
  }
};

function Undo() {
  this.quill.history.undo();
}

function Redo() {
  this.quill.history.redo();
}

var toolbarOptions = {
  handlers: {
    'link': LInk,
    'undo': Undo,
    'redo': Redo,
  },
};

const theme = "snow";
const placeholder = "Compose an epic...";
const modules = {
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
  toolbar: {
    container: TOOLBAR_OPTIONS,
    toolbarOptions,
  },
};

const Createpost = () => {
  const [value, setValue] = useState(initialState);
  const [vquill, setVQuill] = useState();
  const { quill, quillRef, Quill } = useQuill({
    modules,
    formats,
    placeholder,
    theme,
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
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

  const addDetails = () => {};
  console.log(vquill);


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

              {/* <TextEditor /> */}
              {/* <EdittorWrapper
                id="container"
                name="content"
                ref={wrapperRef}
              ></EdittorWrapper> */}

              <EdittorWrapper>
                <div ref={quillRef} formats={ formats} modules={TOOLBAR_OPTIONS} />
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
