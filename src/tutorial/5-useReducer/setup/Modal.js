import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  //useEffect to close modal after 3 second
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return <div className="modal">{modalContent}</div>;
};

export default Modal;
