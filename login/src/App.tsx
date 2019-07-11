import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import LoginClass from "./components/login_class";
import { connect } from "react-redux";
import { IGlobalState } from "./reducers";
import { ITravel } from "./interfaces";
import Table from "./components/table";
import { setTravel } from "./actions";

//Podemos tener en un componente un Iprops que son las
//propiedades que vienen del padre y para diferenciar las que
// vienen del Global(redux) le podemos llamar interface IPropsGlobal

interface IPropsGlobal {
  travels: ITravel[];
  token: string;
  setTravel: (travels: ITravel[]) => void;
}

const App: React.FC<IPropsGlobal> = props => {
  const getTravels = (token: string) => {
    fetch("http://localhost:8080/api/travels", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(travels => props.setTravel(travels));
      }
    });
  };

  useEffect(() => {
    if (props.token) {
      getTravels(props.token);
    }
  }, [props.token]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <Login />

          {props.travels.length > 0 && <Table />}
        </div>
        <div className="col-4">
          <LoginClass />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  travels: state.travels,
  token: state.token
});
const mapDispatchToProps = {
  setTravel: setTravel
};
// El matDispatch nos sirve para enviar una acción desde el padre hacia el Store

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// este connect hace que se puedan recibir props de redux
// no solo del padre
