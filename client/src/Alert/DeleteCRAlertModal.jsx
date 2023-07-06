import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/DeleteCRAlertModa";
import { useAppContext } from "../context/Context";
const DeleteCRAlertModal = () => {
  const {
    showDeleteCrModal,
    deleteCommentReply,
    toggleDeleteCrModal,
    deleteCommentReplyId,
  } = useAppContext();

  useEffect(() => {
    if (showDeleteCrModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showDeleteCrModal]);

  const handleCancel = () => {
    !toggleDeleteCrModal();
  };

  const handleDelete = () => {
    !toggleDeleteCrModal();
    deleteCommentReply(deleteCommentReplyId);
  };

  return (
    <Wrapper
      style={{
        opacity: `${showDeleteCrModal ? 1 : 0}`,
        zIndex: `${showDeleteCrModal ? 10 : -1}`,
      }}
    >
      <div className="modal">
        <div className="modal-heading">
          <h3>Delete reply</h3>
        </div>
        <div className="modal-info">
          <p>
            Are you sure you want to delete this reply? This will remove the
            reply and can’t be undone.
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

export default DeleteCRAlertModal;
