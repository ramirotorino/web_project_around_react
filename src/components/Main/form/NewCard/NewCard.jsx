import React, { useState } from "react";
import "../../../../blocks/popup.css";

export default function NewCard({ onAddPlaceSubmit, onClosePopup }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleLinkChange = (e) => setLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !link) {
      console.error("Error: Los campos no pueden estar vacíos.");
      return;
    }
    onAddPlaceSubmit({ name: title, link }); // ✅ Enviar datos a `App.jsx`
    setTitle(""); // ✅ Limpiar formulario
    setLink("");
    onClosePopup(); // ✅ Cerrar popup después de agregar la tarjeta
  };

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={link}
          onChange={handleLinkChange}
        />
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
