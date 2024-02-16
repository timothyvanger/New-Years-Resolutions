import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setData] = useState<ReactNode>();

  const openModal = (content: ReactNode) => {
    setIsOpen((prev) => !prev);
    setData(content);
  };
  const closeModal = () => {
    console.log("yes");
    setIsOpen((prev) => !prev);
  };
  const createModal = () => {
    if (!modalData) return;

    const modal = <div className="modalWrapper">{modalData}</div>;
    return createPortal(modal, document.getElementById("portal")!);
  };
  console.log(isOpen);

  return { isOpen, openModal, closeModal, createModal };
};

export default useModal;
