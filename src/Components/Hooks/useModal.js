import { useState } from "react";

export const useModal = () => {
  const [modalShow, setModalShow] = useState(false);
  const [confirmationWindow, setConfirmationWindow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleSubmit = () => {
    setModalShow(false);
    setConfirmationWindow(true);
  };
  const handleClose = () => {
    setModalShow(false);
    setConfirmationWindow(false);
  };
  const closeConfirmation = () => setConfirmationWindow(false);

  return {
    modalShow,
    confirmationWindow,
    handleShow,
    handleSubmit,
    handleClose,
    closeConfirmation,
  };
};
