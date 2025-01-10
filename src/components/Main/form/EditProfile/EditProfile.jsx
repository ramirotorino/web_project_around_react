import React from "react";
import "../../../../blocks/popup.css";

export default function EditProfile() {
  return (
    <form className="popup__form" name="edit-profile-form" noValidate>
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
  );
}
