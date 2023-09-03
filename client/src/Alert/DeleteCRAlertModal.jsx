import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/DeleteAlertModal";
import { useAppContext } from "../context/Context";
import { Paragraph} from "../Components/export"


const DeleteCRAlertModal = () => {
  const {
    showDeleteCrModal,
    deleteCommentReply,
    toggleDeleteCrModal,
    deleteCommentReplyId,
    light_dark
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
        zIndex: `${showDeleteCrModal ? 13 : -1}`,
      }}
    >
      <div className={`modal ${light_dark}`}>
        <div className="modal-heading-container">
          <h3  className={`modal-heading ${light_dark}`}>Delete reply</h3>
        </div>
        <div className="modal-info">
          <Paragraph>
            Are you sure you want to delete this reply? This will remove the
            reply and can’t be undone.
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

export default DeleteCRAlertModal;
