import React from "react";
import "@/blocks/popup.css"; // Ruta usando el alias

export default function Popup({ title, children, isOpen, onClose }) {
  const popupClass = `popup ${isOpen ? "popup_opened" : ""}`;

  // Manejar el cierre al hacer clic fuera del contenedor
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup_opened")) {
      onClose();
    }
  };

  return (
    <div className={popupClass} onClick={handleOverlayClick}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose}>
          &times;
        </button>
        <h3 className="popup__title">{title}</h3>
        <div className="popup__content">{children}</div>
      </div>
    </div>
  );
}
