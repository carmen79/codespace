import React from "react";
import { connect } from "react-redux";
import { setToken } from "../actions";
import { IGlobalState } from "../reducers";
import { Link } from "react-router-dom";

interface IPropsGlobal {
  setTokenInterno: (t: string) => void;
}

const Login: React.FC<IPropsGlobal> = props => {
  const [userNameValue, setUserNameValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };
  const getToken = () => {
    fetch("http://localhost:8080/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: userNameValue, password: passwordValue })
    })
      .then(res => res.text())
      .then(token => {
        console.log(token);
        //el token lo tengo y lo tengo que guardar en Redux
        props.setTokenInterno(token);

      });
  };

  return (
    <div className="container">

      <div className="card-panel teal lighten-2">
        <h5>Introduce tus datos</h5>
      </div>

      <div className="form-group">
        <div className="input-field col s12">
          <input id="username" className="validate" value={userNameValue} type="text" onChange={updateUsername} />
          <label htmlFor="username">Usuario</label>
        </div>
        <div className="input-field col s12">
          <input className="validate" id="password"
            value={passwordValue}
            type="password"
            onChange={updatePassword}
            data-testid="password_input"
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <div>
        <button className="waves-effect waves-light btn-small" onClick={getToken}>
          <i className="material-icons right">account_circle</i>
          Login
          </button>
      </div>
    </div >
  );
};

//export default Login;

const mapDispatchToProps = { setTokenInterno: setToken };

export default connect(
  null,
  mapDispatchToProps
)(Login);



                                // este primer componente es el login
                                // introducimos usuario y contraseña y 
                                // enviamos fecht para generar un token
                                // donde guardamos el token:  en redux
                                // en la app tenemos que hacer un BrowserRouter para decir: 
                                //si  no hay token memuestras la página de login y si hay token la principal
