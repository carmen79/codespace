import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import { tokenReducer } from "./tokenReducer";
import { ICity } from "./interfaces";
import { IGlobalState } from "./reducers";
import { connect } from "react-redux";
import Cities from "./components/cities";
import * as actions from "./action";

interface IPropsGlobal {
  cities: any[];
  token: string;
  setCities: (cities: ICity[]) => void; //la tengo que definir en el action
}
const App: React.FC<IPropsGlobal> = props => {
  const getCities = (token: string) => {
    fetch("192.168.100.2/cities", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(cities => props.setCities(cities)); //esta función tiene que venir definida de las actions y pasada como props
      }
    });
  };
  useEffect(() => {
    if (props.token) {
      getCities(props.token);
    }
  }, [props.token]);

  return (
    <div className="container">
      <div className="row">
        {!props.token && (
          <div className="col-12">
            <Login />
          </div>
        )}
        {props.token && (
          <>
            <div className="col-6">
              <Cities />
            </div>
            <div className="col-6" />
          </>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  cities: state.cities
});

const mapDispatchToProps = {
  setCities: actions.setCities
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
