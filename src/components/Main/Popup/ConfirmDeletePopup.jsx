import React from "react";
import "@/blocks/popup.css";

export default function ConfirmDeletePopup({ isOpen, onClose, onConfirm }) {
  const popupClass = `popup ${isOpen ? "popup__opened" : ""}`;

  return (
    <div className={popupClass}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}>
          ×
        </button>
        <h3 className="popup__title">¿Estás seguro?</h3>
        <button
          className="popup__button popup__button_confirm"
          type="button"
          onClick={onConfirm}
        >
          Sí
        </button>
      </div>
    </div>
  );
}
