import { useState } from "react";
import "../styles/Modal.css";
import { PropsModal } from "../types";

export const Modal = ({ children, titleButton }: PropsModal) => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  return (
    <>
      <button className="btn-modal" onClick={handleModal}>
        {titleButton}
      </button>
      <section
        data-testid="modal"
        className={`container-modal ${active ? "active" : ""}`}>
        <div className="modal">
          <button onClick={handleModal} className="close-modal">
            X
          </button>
          {children}
        </div>
      </section>
    </>
  );
};
