import React, { useEffect } from "react";
import { ITravel, IDecode } from "../interface";
import { IGlobalState } from "../reducers";
import { connect } from "react-redux";
import { RouteComponentProps, Redirect } from "react-router-dom";
import * as actions from "../actions";

interface IPropsGlobal {
  token: string;
  travels: ITravel[];
  setTravel: (travels: ITravel[]) => void;
  removeTravel: (travel_id: string) => void;
}

const TravelDetailRedux: React.FC<
  IPropsGlobal & RouteComponentProps<{ id: string }>
> = props => {
  const travel = props.travels.find(t => t._id === props.match.params.id);

  if (!travel) {
    return null;
  }
  // aqui hacemos un redirect a travels

  const deleteTravel = () => {
    console.log("Deleting travel with id: " + travel._id);
    fetch("http://localhost:8080/api/travels/" + travel._id, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + props.token
      }
    }).then(() => {
      props.removeTravel(travel._id);
      props.history.push("/");
    });
  };

  return (
    <div>
      <header className="bg-primary">Id_Travel {travel._id}</header>
      <div className="row">Destino {travel.destino}</div>
      <div className="row">Descripción {travel.descripcion}</div>
      <div className="row">
        <button onClick={deleteTravel}>Eliminar</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  travels: state.travels
});
const mapDispatchToProps = {
  setTravel: actions.setTravel,
  removeTravel: actions.removeTravel
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelDetailRedux);
