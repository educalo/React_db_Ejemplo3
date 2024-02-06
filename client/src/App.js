import React from "react";
//Routes: Representado en cualquier lugar de la aplicación, <Routes>coincidirá con un conjunto de rutas secundarias desde la ubicación actual .
//BrowserRouter: Este es el enrutador recomendado para todos los proyectos web de React Router. Utiliza la API DOM History para actualizar la URL y administrar la pila del historial.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./elements/Home";
import Create from "./elements/Create";
import Edit from "./elements/Edit";
import Read from "./elements/Read";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
