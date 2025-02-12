import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importa tus componentes de página
import Login from "./src/page/login/login";
import Home from "./src/page/home/home";
import Vendedor from "./src/page/vendedor/dashboardV";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Dashboard-vendedor" element={<Vendedor />} />
        {/* Otras rutas */}
        <Route path="*" element={<div>Página no encontrada</div>} />{" "}
        {/* Ruta para errores 404 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
