import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Páginas principales
import HomePage from "./pages/HomePage";
import IniciarSesion from "./pages/IniciarSesion";
import Promociones from "./pages/Promociones";
import Opiniones from "./pages/Opiniones";
import Registro from "./pages/Registro";

import "./App.css";

function App() {
  const usuarioLogeado = localStorage.getItem("usuarioLogeado");

  return (
    <Router>
      <Routes>

        {/* Ruta principal */}
        <Route
          path="/"
          element={
            usuarioLogeado ? <HomePage /> : <Navigate to="/iniciar-sesion" />
          }
        />

        {/* Inicio de sesión */}
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />

        {/* Registro */}
        <Route path="/registro" element={<Registro />} />

        {/* Promociones */}
        <Route path="/promociones" element={<Promociones />} />

        {/* Opiniones */}
        <Route path="/opiniones" element={<Opiniones />} />
        
      </Routes>
    </Router>
  );
}

export default App;
