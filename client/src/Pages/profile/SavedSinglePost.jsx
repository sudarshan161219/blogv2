import React, { useEffect } from "react";
import Wrapper from "../../assets/Wrappers/Post";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../../context/Context";
import {
  Loading,
  Post,
  CommentForm,
  CommentsContainer,
} from "../../Components/export";
import DeleteAlertModal from "../../Alert/DeleteAlertModal"
import DeleteCRAlertModal from "../../Alert/DeleteCRAlertModal"

const SavedSinglePost = () => {
  const { clearAuthorSinglePost, getSinglePost, isLoading, user, post } =
    useAppContext();

  const { id } = useParams();
  const { title, coverImg, content, createdAt, author } = post;
  // useEffect(() => {
  //   getSinglePost(id);
  // }, [id, user]);

  // const handleClick = () => {
  //   clearAuthorSinglePost();
  // };

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    //   <Wrapper>
    //    <div className="post-container">
    //       <div className="post-heading-container">
    //         <h1>{title}</h1>
    //         <div className="post-date-author-info-container">
    //           <span>{Fdate}</span>
    //           <BsDot />
    //           <Link
    //             to={`/author/${author ? author._id : ""}`}
    //             className="Link post-author"
    //           >
    //             <BsPersonCircle />
    //             {author ? author.name : null}
    //           </Link>
    //         </div>
    //       </div>

    //       <div className="post-img-container noSelect">
    //         <img src={coverImg} alt={title} />
    //         {user ? (
    //           <div className="like-dislike-comment-save">
    //             <div className="like-dislike-comment">
    //               <div className="like-container">
    //                 {like ? (
    //                   <Ripples className="ripple">
    //                     <BiSolidLike className="ldc-icons" onClick={handleLike} />
    //                   </Ripples>
    //                 ) : (
    //                   <Ripples className="ripple">
    //                     <BiLike className="ldc-icons" onClick={handleLike} />
    //                   </Ripples>
    //                 )}
    //                 <strong>{postLikes}</strong>
    //               </div>
    //               <div className="dislike-container">
    //                 {dislike ? (
    //                   <Ripples className="ripple">
    //                     <BiSolidDislike
    //                       className="ldc-icons"
    //                       onClick={handleDislike}
    //                     />
    //                   </Ripples>
    //                 ) : (
    //                   <Ripples className="ripple">
    //                     <BiDislike
    //                       className="ldc-icons"
    //                       onClick={handleDislike}
    //                     />
    //                   </Ripples>
    //                 )}
    //                 <strong>{postDisLikes}</strong>
    //               </div>
    //               <div className="comment-container">
    //                 <Ripples className="ripple">
    //                   <BiComment className="ldc-icons" />
    //                 </Ripples>
    //                 <strong>{postComments}</strong>
    //               </div>
    //             </div>
    //             <div>
    //               {save ? (
    //                 <Ripples className="ripple">
    //                   <BsFillBookmarkCheckFill
    //                     className="ldc-icons"
    //                     onClick={handleSave}
    //                   />
    //                 </Ripples>
    //               ) : (
    //                 <Ripples className="ripple">
    //                   <BsBookmark className="ldc-icons" onClick={handleSave} />
    //                 </Ripples>
    //               )}
    //             </div>
    //           </div>
    //         ) : (
    //           <div className="ldc-disable-msg">
    //             <strong>
    //               <Link className="strong-link" to="/register">
    //                 login
    //               </Link>
    //               &nbsp; or &nbsp;
    //               <Link className="strong-link" to="/register">
    //                 sign up
    //               </Link>
    //               &nbsp; to like and comment on post
    //             </strong>
    //           </div>
    //         )}
    //       </div>

    //       {/* <div className="ql-snow post-content-container">
    //   <div
    //     className="ql-editor"
    //     dangerouslySetInnerHTML={{ __html: content }}
    //   ></div>
    // </div> */}
    //     </div>
    //   </Wrapper>

    <Wrapper>
      <Post />
      <div className="comment-container-div">
        {user && <CommentForm />}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="comments">
            <CommentsContainer />
          </div>
        )}
      </div>
      <DeleteAlertModal />
      <DeleteCRAlertModal />
    </Wrapper>
  );
};

export default SavedSinglePost;
