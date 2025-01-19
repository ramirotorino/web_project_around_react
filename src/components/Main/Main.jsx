// Final Fix for Image Popup in Main.jsx
import React, { useState } from "react";
import avatar from "../../images/profilePhoto.png";
import Popup from "../Main/Popup/Popup";
import NewCard from "./form/NewCard/NewCard";
import EditProfile from "./form/EditProfile/EditProfile";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import Card from "../Card/Card";
import ImagePopup from "./Popup/ImagePopup";
import ConfirmDeletePopup from "./Popup/ConfirmDeletePopup";

// Import styles
import "../../../src/blocks/profile.css";
import "../../../src/blocks/popup.css";
import "../../../src/blocks/page.css";
import "../../../src/blocks/mediaQueries.css";
import "../../../src/blocks/header.css";
import "../../../src/blocks/footer.css";
import "@/blocks/elements.css";

// Sample card data
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

function Main() {
  const [popup, setPopup] = useState(null); // State for general popups
  const [selectedCard, setSelectedCard] = useState(null); // State for image popups
  const [deleteCard, setDeleteCard] = useState(null); // State for delete confirmation popup

  // Function to handle opening a popup
  const handleOpenPopup = (popup) => {
    console.log("Opening popup:", popup);
    setPopup(popup);
  };

  // Function to handle closing the current popup
  const handleClosePopup = () => {
    console.log("Closing popup");
    setPopup(null);
  };

  // Function to handle card selection (image popup)
  const handleCardClick = (card) => {
    console.log("Card selected for image popup:", card); // Debugging
    setSelectedCard(card);
  };

  // Function to close the image popup
  const handleCloseImagePopup = () => {
    console.log("Closing image popup");
    setSelectedCard(null);
  };

  // Function to handle card deletion
  const handleCardDelete = (card) => {
    console.log("Card delete initiated:", card);
    setDeleteCard(card);
    setPopup({
      title: "¿Estás seguro?",
      type: "delete",
      children: (
        <ConfirmDeletePopup
          onConfirm={() => {
            console.log("Card deleted:", deleteCard);
            setDeleteCard(null);
            setPopup(null);
          }}
          onClose={() => setPopup(null)}
        />
      ),
    });
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
            onClick={() =>
              handleOpenPopup({
                title: "Editar Avatar",
                type: "profile",
                children: <EditAvatar />,
              })
            }
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
            onClick={() =>
              handleOpenPopup({
                title: "Editar Perfil",
                type: "profile",
                children: <EditProfile />,
              })
            }
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
          onClick={() =>
            handleOpenPopup({
              title: "Nueva Tarjeta",
              type: "profile",
              children: <NewCard />,
            })
          }
        >
          Nueva Tarjeta
        </button>
      </section>

      {/* Card list */}
      <section className="elements">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={() => handleCardClick(card)} // Fixed handling for image selection
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {/* General popup */}
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          type={popup.type}
          isOpen={!!popup}
        >
          {popup.children}
        </Popup>
      )}

      {/* Image popup */}
      <ImagePopup
        isOpen={!!selectedCard}
        onClose={handleCloseImagePopup}
        card={selectedCard}
      />
    </main>
  );
}

export default Main;
