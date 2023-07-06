import React from "react";
import Wrapper from "../assets/Wrappers/DeleteAlertModal";
import { useAppContext } from "../context/Context";

const DeleteAlertModal = () => {
  const { deleteCommentId, deleteComment, toggleDeleteModal, showDeleteModal } =
    useAppContext();

  const handleCancel = () => {
    !toggleDeleteModal();
  };

  const handleDelete = () => {
    !toggleDeleteModal();
    deleteComment(deleteCommentId);
  };

  return (
    <Wrapper
      style={{
        opacity: `${showDeleteModal ? 1 : 0}`,
        zIndex: `${showDeleteModal ? 10 : -1}`,
      }}
    >
      <div className="modal">
        <div className="modal-heading">
          <h3>Delete Comment</h3>
        </div>
        <div className="modal-info">
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
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

export default DeleteAlertModal;
