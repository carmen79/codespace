import React from "react";
import { ITravel } from '../interfaces';

//estas son las propiedades que recibe del padre por ello
//son IProps
interface IProps{
    travels:ITravel[]
}


class TableClass extends React.Component<IProps> {
  //Esta clase no necesita constructor porque no tiene estado
  // y por que recibe las propiedades del padre 

render() {
    return(

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
    {this.props.travels.map(travel => (
      <tr key={travel._id}>
        <td>{travel.destino}</td>
        <td>{travel.fechaInicio}</td>
        <td>{travel.fechaFin}</td>
        <td>{travel.descripcion}</td>
      </tr>
    ))}
  </tbody>
</table>

    )
    }
}
export default TableClass;