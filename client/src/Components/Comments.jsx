import React from "react";
import Wrapper from "../assets/Wrappers/Comments";
import { BsReplyFill } from "react-icons/bs";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Comments = () => {
  return (
    <Wrapper>
      <div className="comment-container">
        <div className="comment-info-container">
          <div className="comment-name-time-reply">
            <div className="comment-img-name">
              <img
                className="mobile-comment-img"
                src="https://api.dicebear.com/6.x/adventurer/svg?seed=Cali"
                alt="avatar"
              />
              <strong>User</strong>
            </div>
            <div className="icon-container">
              <BsReplyFill className="reply-icon" />
              <strong>reply</strong>
            </div>
          </div>
          <div className="comment-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="comment-like-dislike-container">
          <div className="comment-like-container">
                  {/* {like ? (
                    <BiSolidLike className="ldc-icons" onClick={handleLike} />
                  ) : (
                    <BiLike className="ldc-icons" onClick={handleLike} />
                  )} */}
                    <BiLike className="comment-icons" />
                  <strong>25</strong>
                </div>
                <div className="comment-dislike-container">
                  {/* {dislike ? (
                    <BiSolidDislike
                      className="ldc-icons"
                      onClick={handleDislike}
                    />
                  ) : (
                    <BiDislike className="ldc-icons" onClick={handleDislike} />
                  )} */}
                    <BiDislike className="comment-icons" />
                  <strong>10</strong>
                </div>
          </div>
        </div>

        <div>comment-reply</div>
      </div>
    </Wrapper>
  );
};

export default Comments;
