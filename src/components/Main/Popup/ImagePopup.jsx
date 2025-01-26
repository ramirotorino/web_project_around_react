// Debugged ImagePopup.jsx
import React from "react";
import "@/blocks/popup.css";
import closeIcon from "../../../images/CloseIcon.svg";

export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup__opened" : ""}`}>
      <div className="popup__content popup__content_content_image">
        <button
          style={{
            position: "relative",
            top: "-8px",
            right: "-535px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
          className="popup__close-button"
          type="button"
          onClick={() => {
            onClose();
          }}
          aria-label="Close image popup"
        >
          <img src={closeIcon} alt="Close popup" />
        </button>
        {card ? (
          <>
            <img className="popup__image" src={card.link} alt={card.name} />
            <p className="popup__caption">{card.name}</p>
          </>
        ) : (
          <p>No se seleccionó ninguna tarjeta</p>
        )}
      </div>
    </div>
  );
}
