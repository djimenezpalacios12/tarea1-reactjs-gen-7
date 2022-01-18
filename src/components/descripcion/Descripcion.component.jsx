import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import DATA from "../../pages/project/project.data";

const Descripcion = ({ id }) => {
  return (
    <div className="border bg-white rounded p-2">
      {id ? (
        DATA.filter((proyecto) => proyecto.id === id).map((proyecto) => {
          return (
            <span key={proyecto.id} className="text-info">
              {proyecto.descripcion}
            </span>
          );
        })
      ) : (
        <span className="text-warning">
          Seleccionar un proyecto para visualizar su contenido...
        </span>
      )}

      <div className="my-2">
        <span className="text-success">Progreso del proyecto:</span>
        {DATA.filter((proyecto) => proyecto.id === id).map((proyecto) => {
          return (
            <span key={proyecto.id} className="text-info">
              <LinearProgress
                className="mt-2"
                variant="determinate"
                value={proyecto.cumplidos}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Descripcion;
