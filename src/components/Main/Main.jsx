import React, { useState } from "react";
import avatar from "../../images/profilePhoto.png";
import Popup from "../Main/Popup/Popup";
import NewCard from "./form/NewCard/NewCard";
import EditProfile from "./form/EditProfile/EditProfile";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import Card from "../Card/Card";
import ImagePopup from "./Popup/ImagePopup";

// Importa el componente Card e ImagePopup
import "../../../src/blocks/profile.css";
import "../../../src/blocks/popup.css";
import "../../../src/blocks/page.css";
import "../../../src/blocks/mediaQueries.css";
import "../../../src/blocks/header.css";
import "../../../src/blocks/footer.css";
import "@/blocks/elements.css";

// Datos ficticios de tarjetas
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards); // Imprimir los datos para verificar

function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null); // Estado para la tarjeta seleccionada

  const newCardPopup = { title: "Nueva Tarjeta", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  const handleOpenPopup = (popup) => {
    console.log("Abriendo popup:", popup);
    setPopup(popup);
  };

  const handleClosePopup = () => {
    console.log("Cerrando popup");
    setPopup(null);
    setSelectedCard(null); // Limpia la tarjeta seleccionada
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={avatar}
            alt="Profile photo"
            className="profile__photo profile__avatar"
          />
          <button
            className="profile__avatar-edit"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img src="./images/pencilEditButton.svg" alt="Edit Avatar Icon" />
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__info-text">
            <h2 className="profile__info-name">Jacques Cousteau</h2>
            <p className="profile__info-about">Explorer</p>
          </div>
          <button
            className="profile__info-edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            <img
              className="profile__info-edit-pencil"
              src="./images/pencilEditButton.svg"
              alt="Pencil Edit Button"
            />
          </button>
        </div>
        <button
          className="profile__add-img"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          Nueva Tarjeta
        </button>
      </section>

      {/* Lista de tarjetas */}
      <section className="elements">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
      </section>

      {/* Popup */}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title} isOpen={!!popup}>
          {popup.children}
        </Popup>
      )}

      {/* ImagePopup */}
      <ImagePopup
        isOpen={!!selectedCard}
        onClose={handleClosePopup}
        card={selectedCard}
      />
    </main>
  );
}

export default Main;
