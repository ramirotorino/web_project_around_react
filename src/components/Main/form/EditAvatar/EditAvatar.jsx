import React from "react";
import "../../../../blocks/popup.css";

export default function EditAvatar() {
  return (
    <form className="popup__form" name="edit-avatar-form" noValidate>
      <label className="popup__field">
        <input
          type="url"
          className="popup__input"
          name="avatar"
          placeholder="Enlace de imagen"
          required
        />
        <span className="popup__error" id="avatar-error"></span>
      </label>
      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
