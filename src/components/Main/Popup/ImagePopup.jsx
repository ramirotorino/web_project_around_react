// Debugged ImagePopup.jsx
import React from "react";
import "@/blocks/popup.css";

export default function ImagePopup({ card, isOpen, onClose }) {
  console.log("ImagePopup props:", { card, isOpen }); // Debugging

  return (
    <div className={`popup ${isOpen ? "popup__opened" : ""}`}>
      <div className="popup__content popup__content_content_image">
        <button
          className="popup__close-button"
          type="button"
          onClick={() => {
            console.log("ImagePopup cerrado"); // Debugging
            onClose();
          }}
          aria-label="Close image popup"
        >
          ×
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
