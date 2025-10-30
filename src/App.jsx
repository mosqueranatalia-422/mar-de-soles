import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IniciarSesion from "./pages/IniciarSesion";
import Registro from "./pages/Registro"; 
import "./App.css";

function App() {
  const usuarioLogeado = localStorage.getItem("usuarioLogeado");

  return (
    <Router>
      <Routes>
        {/* Si no hay usuario logeado, redirige a /iniciar-sesion */}
        <Route
          path="/"
          element={
            usuarioLogeado ? <HomePage /> : <Navigate to="/iniciar-sesion" />
          }
        />
        {/* Pantalla de inicio de sesión */}
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;

