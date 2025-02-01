import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"; // ✅ Importar contexto
import api from "../../utils/api"; // ✅ Importar API
import "@/blocks/elements.css";

export default function Card({
  card,
  onCardClick,
  onCardDelete,
  onUpdateCards,
}) {
  const currentUser = useContext(CurrentUserContext); // ✅ Obtener usuario actual desde el contexto

  // ✅ Asegurar que `card` tenga estructura válida
  if (!card) {
    console.error("La tarjeta no tiene datos válidos:", card);
    return null; // Evitar que el componente se renderice con datos incorrectos
  }

  const { name, link, likes = [], _id } = card; // ✅ Si `likes` no existe, asignar `[]` para evitar errores

  // ✅ Verificar si el usuario actual ha dado "like" a la tarjeta
  const isLiked =
    Array.isArray(likes) && likes.some((like) => like._id === currentUser?._id);

  // ✅ Aplicar la clase "like activo" si el usuario ha dado like
  const cardLikeButtonClassName = `elements__like-btn ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  // ✅ Función para manejar el "Like"
  const handleLikeClick = () => {
    const apiMethod = isLiked ? api.unlikeCard : api.likeCard; // Si ya está likeado, se quita, sino se pone

    apiMethod(_id)
      .then((updatedCard) => {
        onUpdateCards(updatedCard); // ✅ Actualizar el estado en el componente padre
      })
      .catch((err) => {
        console.error("Error al actualizar el like:", err);
      });
  };

  return (
    <li className="elements__picture">
      <img
        className="elements__picture-size"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <button
        aria-label="Delete card"
        className="elements__picture-trash-btn"
        type="button"
        onClick={() => onCardDelete(card)}
      ></button>
      <div className="elements__picture-name-section">
        <h2 className="elements__picture-name">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName} // ✅ Aplicar clase según "isLiked"
          onClick={handleLikeClick} // ✅ Llamar a la función cuando se haga clic
        ></button>
      </div>
    </li>
  );
}
