import React, { useEffect } from "react";
import { ITravel, IDecode } from "../interface";
import { IGlobalState } from "../reducers";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

interface IPropsGlobal {
  travels: ITravel[];
}

const TravelDetailRedux: React.FC<
  IPropsGlobal & RouteComponentProps<{ id: string }>
> = props => {
  const travel = props.travels.find(t => t._id === props.match.params.id);

  if (!travel) {
    return null;
  }

  return (
    <div>
      <header className="bg-primary">Id_Travel {travel._id}</header>
      <div className="row">Destino {travel.destino}</div>
      <div className="row">Descripción {travel.descripcion}</div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  travels: state.travels
});

export default connect(mapStateToProps)(TravelDetailRedux);
