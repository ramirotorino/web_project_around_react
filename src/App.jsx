import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api"; // ✅ Importar API
import { CurrentUserContext } from "./contexts/CurrentUserContext"; // ✅ Importar contexto

function App() {
  const [currentUser, setCurrentUser] = useState(null); // ✅ Estado para el usuario actual

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData); // ✅ Guardar los datos del usuario en el estado
      })
      .catch((err) => {
        console.error("Error al obtener los datos del usuario:", err);
      });
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

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, handleUpdateUser }}
    >
      {" "}
      {/* ✅ Proveedor de contexto */}
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
