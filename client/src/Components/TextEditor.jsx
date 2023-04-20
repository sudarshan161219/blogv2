import React, { useState, useEffect, useRef, useCallback } from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "../assets/Wrappers/TextEditor";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor = () => {
  const [value, setValue] = useState("");

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow", modules:{toolbar:  TOOLBAR_OPTIONS} });
  }, []);

  return <Wrapper id="container" ref={wrapperRef}></Wrapper>;
};

export default TextEditor;
