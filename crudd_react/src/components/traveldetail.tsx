import React, { useEffect } from "react";
import { checkPropTypes } from "prop-types";
import { ITravel } from "../interface";
import { IGlobalState } from "../reducers";
import { connect } from "react-redux";
import { setTravel } from "../actions";

interface IPropsTravel {
  travelId: string;
  token: string;
}

// Esto viene de la APP que es donde he decodificado el token
// son props del padre que uso en el hijo

const TravelDetail: React.FC<IPropsTravel> = props => {
  const [travelComplete, setTravelComplete] = React.useState<ITravel>();

  useEffect(() => {
    if (props.token) {
      getTravel(props.travelId, props.token);
    }
  });

  const getTravel = (travelId: string, token: string) => {
    console.log("Getting travel with id: " + travelId);
    fetch("http://localhost:8080/api/travels/" + travelId, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      if (res.ok) {

        res.json().then(travel => {
          console.log("Got the travel: " + travel.destino);
          setTravelComplete(travel);
        });
      }
    });
  };

  return (
    <div>
      <header className="bg-primary">
        This is the travel Detail component {props.travelId}
      </header>
      <div className="row">
        Destino: {travelComplete}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
});

export default connect(mapStateToProps)(TravelDetail);

