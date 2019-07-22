import React, { useEffect } from "react";
import { checkPropTypes } from "prop-types";
import { ITravel } from "../interface";
import { IGlobalState } from "../reducers";
import { connect } from "react-redux";
import { setTravel } from "../actions";

interface IProps {
  travelId: string;
}

interface IPropsGlobal {
  token: string;
  travels: ITravel[]
}

// Esto viene de la APP que es donde he decodificado el token
// son props del padre que uso en el hijo

const TravelDetailRedux: React.FC<IProps & IPropsGlobal> = props => {

  useEffect(() => {
    if (props.token) {
      getTravel(props.travelId, props.token);
    }
  });

  const getTravel = (travelId: string, token: string) => {
    console.log("TRAVEL ID: " + travelId);
  };

  return (
    <div>
      <header className="bg-primary">
        This is the travel Detail component {props.travelId}
      </header>
      <div className="row">
        Destino: {props.travels[0]}
      </div>
    </div>
  );
};



const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  travels: state.travels
});

export default connect(mapStateToProps)(TravelDetailRedux);


