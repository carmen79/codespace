import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import LoginClass from "./components/login_class";
import { connect } from "react-redux";
import { IGlobalState } from "./reducers";
import { ITravel } from "./interfaces";
import Table from "./components/table";

//Podemos tener en un componente un Iprops que son las
//propiedades que vienen del padre y para diferenciar las que
// vienen del Global(redux) le podemos llamar interface IPropsGlobal

interface IPropsGlobal {
  token: string;
}

const App: React.FC<IPropsGlobal> = props => {
  const [travels, setTravels] = React.useState<ITravel[]>([]);

  const getTravels = (token: string) => {
    fetch("http://localhost:8080/api/travels", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(travels => setTravels(travels));
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
          {props.token}
          <Table travels={travels} />
        </div>

        <div className="col-4">
          <LoginClass />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});

export default connect(mapStateToProps)(App);
// este connect hace que se puedan recibir props de redux
// no solo del padre
