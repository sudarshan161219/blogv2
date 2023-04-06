import React from "react";
import {BsPersonCircle} from "react-icons/bs"
import blogimg1 from "../assets/Rectangle-2.png";
import blogimg2 from "../assets/Rectangle-3.png";
import blogimg3 from "../assets/Rectangle-4.png";
import Wrapper from "../assets/Wrappers/Editorspick";

const EditorsPickSec = () => {
  return (
    <Wrapper className="editor-page-container">
      <div className="editor-page-heading-container">
        <h1 className="editor-page-heading"> Editor's Picks</h1>
        <span className="heading-underline"></span>
      </div>

      <div className="editor-page-flex-box">
        <div className="editor-page-img-container">
          <img className="editor-page-img" src={blogimg1} alt="hello" />
        </div>

        <div className="editor-page-content">
          <span className="span-fi">Minimalism</span>
          <h2 className="editor-page-heading-two">
            Culpa sit Laboris Exercitation ea Fugiat
          </h2>
          <div className="meta">
            <span className="span-se"><BsPersonCircle />Leslie Pena</span>
            <span className="span-th">/</span>
            <span className="span-fo">April 25, 2012 </span>
          </div>
          <p className="editor-para">
            Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut
            et labore consequat ut ex sunt. Ut et nostrud aliquip do anim
            proident ad nulla consectetur eu aute ex anim mollit. Anim aute
            exercitation nisi fugiat. Dolor velit excepteur commodo proident
            nulla commodo ullamco labore et esse.
          </p>
        </div>
      </div>


      <div className="editor-page-flex-box">
        <div className="editor-page-img-container">
          <img className="editor-page-img" src={blogimg2} alt="hello" />
        </div>

        <div className="editor-page-content">
          <span className="span-fi">Technology</span>
          <h2 className="editor-page-heading-two">
          Amet non Ex Officia nulla Cupidatat
          </h2>
          <div className="meta">
            <span className="span-se"><BsPersonCircle />Jacob Henry</span>
            <span className="span-th">/</span>
            <span className="span-fo">September 27, 2017</span>
          </div>
          <p className="editor-para">
          Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit.
          </p>
        </div>
      </div>



      <div className="editor-page-flex-box">
        <div className="editor-page-img-container">
          <img className="editor-page-img" src={blogimg3} alt="hello" />
        </div>

        <div className="editor-page-content">
          <span className="span-fi">Minimalism</span>
          <h2 className="editor-page-heading-two">
            Culpa sit Laboris Exercitation ea Fugiat
          </h2>
          <div className="meta">
            <span className="span-se"><BsPersonCircle />Leslie Pena</span>
            <span className="span-th">/</span>
            <span className="span-fo">April 25, 2012</span>
          </div>
          <p className="editor-para">
            Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut
            et labore consequat ut ex sunt. Ut et nostrud aliquip do anim
            proident ad nulla consectetur eu aute ex anim mollit. Anim aute
            exercitation nisi fugiat. Dolor velit excepteur commodo proident
            nulla commodo ullamco labore et esse.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default EditorsPickSec;
