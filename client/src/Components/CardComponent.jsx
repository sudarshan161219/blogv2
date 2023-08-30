import { forwardRef } from "react";
import Wrapper from "../assets/Wrappers/CardComponent";
import moment from "moment";
import { BsPersonCircle } from "react-icons/bs";
import { useAppContext } from "../context/Context";
import { Link } from "react-router-dom";
import {Heading} from "../Components/export"

const CardComponent = forwardRef(({ item }, ref) => {
  const { light_dark } = useAppContext()
  const { _id, title, coverImg, content: decs, createdAt, author } = item;


  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }


  const postBody = (
    <Link to={`/post/${_id}`} className="card Link">
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
          <Heading>{title}</Heading>
          <p
            className={`ptag globalParagraph ${light_dark}`}
            dangerouslySetInnerHTML={{ __html: htmlDecode(decs.substring(0, 105)) || decs.substring(0, 105) }}
          ></p>
        </div>
      </div>
    </Link>
  )




  const content = ref ? <Wrapper className={`homeCards ${light_dark}`} ref={ref}>{postBody}</Wrapper> : <Wrapper className={`homeCards ${light_dark}`} >{postBody}</Wrapper>
  return content

})

export default CardComponent;
