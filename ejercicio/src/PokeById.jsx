// src/PokeById.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Pokemon from "./Pokemon"; // Asegúrate de que el nombre del archivo y la exportación sean correctos

const PokeById = () => {
  const { id } = useParams();

  return (
    <div>
      {/* Asegúrate de que el componente Pokemon acepte y maneje la prop id */}
      <Pokemon id={id} />
    </div>
  );
};

export default PokeById;
