// Popup.jsx Debug: Force Content Visibility
import React from "react";
import "@/blocks/popup.css";

export default function Popup({ isOpen, title, children, onClose }) {
  console.log("Popup renderizado:", { isOpen, title, children }); // Debugging

  const popupClass = `popup ${isOpen ? "popup__opened" : ""}`;

  return (
    <div className={popupClass}>
      <div className="popup__container" style={{ minHeight: "200px" }}>
        {" "}
        {/* Force minimum height */}
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
        <div
          className="popup__content"
          style={{ minHeight: "150px", border: "1px solid red" }}
        >
          {" "}
          {/* Debugging border */}
          {children ? (
            <>
              {children}
              <p style={{ color: "red" }}>Contenido recibido correctamente</p>
            </>
          ) : (
            <p style={{ color: "red" }}>
              El contenido (children) no fue proporcionado
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
