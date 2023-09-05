import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/DeleteAlertModal"
import { useAppContext } from "../context/Context";
import {Paragraph} from '../Components/export'
const DeletePostAlert = () => {
  const { deletePostId, deletePost, toggleDeletePostModal, showDeletePostModal, light_dark } =
    useAppContext();

  useEffect(() => {
    if (showDeletePostModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showDeletePostModal]);

  const handleCancel = () => {
    !toggleDeletePostModal();
  };

  const handleDelete = () => {
    !toggleDeletePostModal();
    deletePost(deletePostId);
  };

  return (
    <Wrapper
      style={{
        opacity: `${showDeletePostModal ? 1 : 0}`,
        zIndex: `${showDeletePostModal ? 10 : -1}`,
      }}
    >
      <div className={`modal ${light_dark}`}>
      <div className="modal-heading-container">
          <h3 className={`modal-heading ${light_dark}`}>Delete Post</h3>
        </div>
        <div className="modal-info">
          <Paragraph>
            Are you sure you want to delete this post? This will remove the post
            and can’t be undone.
          </Paragraph>
        </div>
        <div className="modal-btns">
          <button className="no" onClick={handleCancel}>
            no, Cancel
          </button>
          <button className="yes" onClick={handleDelete}>
            yes, Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default DeletePostAlert;
