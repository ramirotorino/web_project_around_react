import React from "react";
import "@/blocks/elements.css";

export default function Card({ card, onCardClick, onCardDelete }) {
  const { name, link } = card;

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
          className="elements__like-btn"
        ></button>
      </div>
    </li>
  );
}
