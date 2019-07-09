import React from "react";
import { ITravel } from "../interfaces";

interface Iprops {
  travels: ITravel[];
}

const Table: React.FC<Iprops> = props => {
  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">Destino</th>
          <th scope="col">Inicio</th>
          <th scope="col">Fin</th>
          <th scope="col">Descripción</th>
        </tr>
      </thead>
      <tbody>
        {props.travels.map(travel => (
          <tr key={travel._id}>
            <td>{travel.destino}</td>
            <td>{travel.fechaInicio}</td>
            <td>{travel.fechaFin}</td>
            <td>{travel.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
