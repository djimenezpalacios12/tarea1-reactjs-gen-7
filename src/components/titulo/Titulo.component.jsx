import React from "react";
import DATA from "../../pages/project/project.data";

const Titulo = ({ id }) => {
  return (
    <div className="border bg-white rounded p-2">
      <span className="text-secondary">PROYECTO SELECCIONADO: </span>
      {DATA.filter((proyecto) => proyecto.id === id).map((proyecto) => {
        return proyecto.nombre;
      })}
    </div>
  );
};

export default Titulo;
