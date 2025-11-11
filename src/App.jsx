import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IniciarSesion from "./pages/IniciarSesion";
import Promociones from "./pages/Promociones";
import Opiniones from "./pages/Opiniones";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/opiniones" element={<Opiniones />} />
      </Routes>
    </Router>
  );
}

export default App;
