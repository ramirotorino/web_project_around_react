import React from "react";
import "@/blocks/popup.css";

export default function ImagePopup({ card, onClose }) {
  const popupClass = `popup ${card ? "popup_opened" : ""}`;

  return (
    <div className={popupClass}>
      <div className="popup__content popup__content_content_image">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        {card && (
          <>
            <img className="popup__image" src={card.link} alt={card.name} />
            <p className="popup__caption">{card.name}</p>
          </>
        )}
      </div>
    </div>
  );
}
