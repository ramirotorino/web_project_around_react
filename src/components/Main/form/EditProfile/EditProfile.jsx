import React, { useState, useEffect } from "react";

export default function EditProfile({
  isOpen,
  onClose,
  onSubmit,
  name,
  about,
}) {
  const [formData, setFormData] = useState({ name: "", about: "" });

  // Synchronize initial values when popup opens
  useEffect(() => {
    if (isOpen) {
      console.log("Popup abierto, valores iniciales:", { name, about }); // Debugging
      setFormData({
        name: name || "",
        about: about || "",
      });
    }
  }, [isOpen, name, about]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Valor actualizado:", { [name]: value }); // Debugging
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos enviados:", formData); // Debugging
    onSubmit(event, formData);
  };

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "430px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            position:
              "absolute" /* Posiciona el botón de cierre de manera absoluta */,
            top: "10px" /* Distancia desde el borde superior */,
            right: "10px" /* Distancia desde el borde derecho */,
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <img src="src/images/closeIcon.svg" alt="Close popup" />
        </button>
        <h3
          className="popup__title"
          style={{ textAlign: "center", marginBottom: "20px", color: "#000" }}
        >
          Editar Perfil
        </h3>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              color: "#000",
            }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
              className="popup__input"
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              color: "#000",
            }}
          >
            <input
              type="text"
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Acerca de mí"
              required
              className="popup__input"
            />
          </label>
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
