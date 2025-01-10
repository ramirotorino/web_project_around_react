import React from "react";
import "@/blocks/elements.css"; // Asegúrate de que la ruta sea correcta

export default function Card({ card, onCardClick }) {
  const { name, link } = card;

  const handleClick = () => {
    onCardClick(card); // Llamar a la función onCardClick con la tarjeta como argumento
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleClick} // Vincular el clic con la función onCardClick
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}
