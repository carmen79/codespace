import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import { IGlobalState } from "./reducers";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import Sidebar from "./components/sidebar";
import TravelDetailRedux from "./components/traveldetailredux";
import { IDecode } from "./interface";
import { setDecode } from './actions';
import NewTravel from "./components/newtravel";

interface IPropsGlobalApp {
  token: string;
  setDecode: (decode: IDecode) => void;
}

const App: React.FC<IPropsGlobalApp> = props => {
  // const [token, setToken] = React.useState("");
  const [username, setUsername] = React.useState("");

  // const updateToken = (token: string) => {
  //   setToken(token);
  // };

  useEffect(() => {
    // aqui hacemos el useEffect para que me devuelva el nombre de mi usuario
    if (props.token) {
      const decode = jwt.decode(props.token);
      if (typeof decode !== "string" && decode !== null) {
        // si el tipo de decodifiacion es didstinto de string y distinto de null decodifacame el username
        // setUsername(decode.username);
        props.setDecode(decode);
        console.log(decode);
      }
    }
  }, [props.token]);

  useEffect(() => console.log(username), [username]); // aqui me imprime el nombre de mi usuario

  return (
    <BrowserRouter>
      {!props.token && <Login />}
      {props.token && <Homepage userNameInternoHomepage={username} />}
      <Redirect to="/" />
      <Switch>
        <Route path="/travels/" exact component={Sidebar} />
        <Route path="/travels/:id" exact component={TravelDetailRedux} />
      </Switch>
      <Route path="/travels/newtravel" exact component={NewTravel} />
    </BrowserRouter>
  );
};

// export default App;

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});
const mapDispatchToProps = {
  setDecode: setDecode
}
// El mapDispatch nos sirve para enviar una acción desde el padre hacia el Store

export default connect(mapStateToProps, mapDispatchToProps)(App);
