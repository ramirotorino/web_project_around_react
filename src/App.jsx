import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api"; // ✅ Importar API
import { CurrentUserContext } from "./contexts/CurrentUserContext"; // ✅ Importar contexto

function App() {
  const [currentUser, setCurrentUser] = useState(null); // ✅ Estado para el usuario actual
  const [cards, setCards] = useState([]); // ✅ Estado de tarjetas

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData); // ✅ Guardar los datos del usuario en el estado
      })
      .catch((err) =>
        console.error("Error al obtener los datos del usuario:", err)
      );

    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData); // ✅ Guardar tarjetas en `App.jsx`
      })
      .catch((err) => console.error("Error al obtener las tarjetas:", err));
  }, []);

  // ✅ Función para actualizar el usuario en la API
  const handleUpdateUser = (data) => {
    api
      .updateUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData); // ✅ Actualizar estado global del usuario
      })
      .catch((error) =>
        console.error("Error al actualizar el usuario:", error)
      );
  };

  // ✅ Nueva función para actualizar el avatar
  const handleUpdateAvatar = (data) => {
    api
      .updateAvatar(data)
      .then((newData) => {
        setCurrentUser(newData); // ✅ Actualizar avatar en el estado global
      })
      .catch((error) => console.error("Error al actualizar el avatar:", error));
  };

  // ✅ Función para manejar la adición de una nueva tarjeta
  // ✅ Asegurar que se envían los datos correctos a la API
  const handleAddPlaceSubmit = (cardData) => {
    console.log("📌 Enviando nueva tarjeta a la API:", cardData);

    if (!cardData.name || cardData.name.length < 3) {
      console.error("🚨 Error: El nombre debe tener al menos 3 caracteres.");
      return;
    }

    if (!cardData.link || !cardData.link.startsWith("http")) {
      console.error("🚨 Error: La URL de la imagen no es válida.");
      return;
    }

    api
      .addCard({
        name: cardData.name.trim(),
        link: cardData.link.trim(),
      })
      .then((newCard) => {
        console.log("✅ Tarjeta añadida correctamente:", newCard);
        setCards((prevCards) => [newCard, ...prevCards]); // ✅ Agregar tarjeta sin recargar
      })
      .catch((error) => {
        console.error("❌ Error al agregar la tarjeta:", error);
      });
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.error("Error al eliminar la tarjeta:", error));
  };

  const handleCardLike = (card) => {
    api
      .changeLikeCardStatus(card._id, !card.isLiked)
      .then((newCard) => {
        setCards((prevCards) =>
          prevCards.map((c) =>
            c._id === card._id ? { ...c, isLiked: newCard.isLiked } : c
          )
        );
      })
      .catch((error) => console.error("Error al actualizar el like:", error));
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards} // ✅ Pasar tarjetas a `Main`
          onAddPlaceSubmit={handleAddPlaceSubmit} // ✅ Pasar función de añadir tarjetas
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
