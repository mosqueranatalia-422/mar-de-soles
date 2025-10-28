import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Opiniones from "../pages/Opiniones";
import Promociones from "../pages/Promociones";
import Registro from "../pages/Registro";
import IniciarSesion from "../pages/IniciarSesion";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/opiniones" element={<Opiniones />} />
      <Route path="/promociones" element={<Promociones />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/iniciarsesion" element={<IniciarSesion />} />
    </Routes>
  );
}
