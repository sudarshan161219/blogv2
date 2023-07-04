import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/CommentReplies";
import { BsReplyFill } from "react-icons/bs";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
// import CommentRepliess from "./CommentReplies"
import CommentReplyForm from "./CommentReplyForm";
import { useAppContext } from "../context/Context";
const CommentReplies = ({ replies }) => {
  const { formLoading } = useAppContext();
  const [reply, setReply] = useState(false);

  const { repliedComment, replieAuthor } = replies;
  const handleReply = () => {
    setReply(!reply);
  };

  useEffect(() => {
    if (!formLoading) {
      setReply(false);
    }
  }, []);

  return (
    <Wrapper>
      <div className="comment-reply-container">
        <div className="comment-info-container">
          <div className="comment-name-time-reply">
            <div className="comment-img-name">
              <img
                className="mobile-comment-img"
                src={replieAuthor.userImg}
                alt="avatar"
              />
              <strong>{replieAuthor.name}</strong>
            </div>
            <div onClick={handleReply} className="icon-container">
              <BsReplyFill className="reply-icon" />
              <strong>reply</strong>
            </div>
          </div>
          <div className="comment-content">
            <p>{repliedComment}</p>
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

        {/* //$conditional rendring */}
        {reply && <CommentReplyForm name={replieAuthor.name} />}
      </div>
    </Wrapper>
  );
};

export default CommentReplies;
