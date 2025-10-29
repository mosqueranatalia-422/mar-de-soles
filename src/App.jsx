import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IniciarSesion from "./pages/IniciarSesion"; // 👈 este es el nuevo componente
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
  );
}

export default App;
