import React, { forwardRef } from "react";
import Wrapper from "../assets/Wrappers/HomePage";
import moment from "moment";
import { BsPersonCircle } from "react-icons/bs";

import { Link } from "react-router-dom";


const HomePage = forwardRef(({ post }, ref) => {

  const { _id, title, coverImg, content:decs, createdAt, author } = props.item;


  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }


  const postBody = (
      <div className="card">
        <div className="homepage-img-container">
          <img className="homepage-img" src={coverImg} alt=" articalimg" />
        </div>
        <div className="homepage-info-container">
          <div className="homepage-author-info-container">
            <span>{Fdate} </span>
            <span>
              <BsPersonCircle /> {author.name}
            </span>
          </div>
          <div className="homepage-text-info-container">
            <h1>{title}</h1>
            <p
              className="ptag"
              dangerouslySetInnerHTML={{ __html: htmlDecode(decs.substring(0, 105)) || decs.substring(0, 105) }}
            ></p>
            <Link className="homepage-link" to={`/post/${_id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
)

    const content = ref ? <Wrapper ref={ref}>{postBody}</Wrapper> : <Wrapper>{postBody}</Wrapper>
    return content
  
})

export default HomePage;
