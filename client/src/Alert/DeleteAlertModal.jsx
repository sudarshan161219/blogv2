import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/DeleteAlertModal";
import { useAppContext } from "../context/Context";
import { Paragraph} from "../Components/export"

const DeleteAlertModal = () => {
  const { deleteCommentId, deleteComment, toggleDeleteModal, showDeleteModal, light_dark } =
    useAppContext();


  useEffect(() => {
    if (showDeleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showDeleteModal]);

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
        zIndex: `${showDeleteModal ? 13 : -1}`,
      }}
    >
      <div className={`modal ${light_dark}`}>
        <div className="modal-heading-container">
          <h3 className={`modal-heading ${light_dark}`}>Delete Comment</h3>
        </div>
        <div className="modal-info">
          < Paragraph>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
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

export default DeleteAlertModal;
