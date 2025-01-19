// Debugged Popup.jsx
import React from "react";
import "@/blocks/popup.css";

export default function Popup({ isOpen, title, children, onClose }) {
  console.log("Popup renderizado:", { isOpen, title }); // Debugging

  return (
    <div className={`popup ${isOpen ? "popup__opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={() => {
            console.log("Popup cerrado"); // Debugging
            onClose();
          }}
          aria-label="Close popup"
        >
          ×
        </button>
        {title && <h2 className="popup__title">{title}</h2>}
        <div className="popup__content">{children}</div>
      </div>
    </div>
  );
}
