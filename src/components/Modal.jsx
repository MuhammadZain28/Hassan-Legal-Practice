import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        transition: "opacity 0.3s ease"
      }}
      onClick={onClose} 
    >
      <div
        style={{
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") 
  );
};

export default Modal;
