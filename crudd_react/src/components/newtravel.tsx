import React, { useEffect } from "react";
import { ITravel, IDecode } from "../interface";
import { IGlobalState } from "../reducers";
import { connect } from "react-redux";
import { RouteComponentProps, Redirect } from "react-router-dom";
import * as actions from "../actions";

interface IPropsGlobal {
  token: string;
  addTravel: (travel: ITravel) => void;


}

const NewTravel: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  const [destinoValue, setDestino] = React.useState("");


  const updateDestino = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestino(event.target.value);
  };


  const addTravel = () => {
    fetch("http://localhost:8080/api/travels", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + props.token
      },

      body: JSON.stringify({
        destino: destinoValue
        // fechaInicio: fechaInicioValue,
        // fechaFin: fechaFinValue, descripcion: descripcionValue
      })

    }).then(res => {
      if (res.ok) {
        res.text().then(text => {
          console.log("JSON RESPONSE: " + res.json);
          //let addedTravel: ITravel = res.json;
          //props.addTravel(addedTravel);
          props.history.push("/");
        })

      }
    })
  };

  return (
    < div className="container" >
      <div className="form-group">
        <div>
          <h5>destino</h5>
          <input value={destinoValue} type="text" onChange={updateDestino} />
        </div>

        <div>
          <button onClick={addTravel}>enviar</button>
        </div>
      </div>
    </div >
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  travels: state.travels
});
const mapDispatchToProps = {
  addTravel: actions.addTravel,

};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTravel);
