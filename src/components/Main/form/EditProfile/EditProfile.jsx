import React from "react";
import "@/blocks/popup.css";

export default function EditProfile({ isOpen, onClose, onSubmit }) {
  const popupClass = `popup ${isOpen ? "popup__opened" : ""}`;

  return (
    <div className={popupClass}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}>
          ×
        </button>
        <h3 className="popup__title">Editar Perfil</h3>
        <form className="popup__form" onSubmit={onSubmit}>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input"
              name="name"
              placeholder="Nombre"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error" id="name-error"></span>
          </label>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input"
              name="about"
              placeholder="Acerca de mí"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__error" id="about-error"></span>
          </label>
          <button type="submit" className="popup__button">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
