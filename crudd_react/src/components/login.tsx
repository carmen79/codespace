import React from "react";
import { connect } from "react-redux";
import { setToken } from "../actions";
import { IGlobalState } from "../reducers";

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
      <div className="form-group">
        <div>
          <h5>User Name</h5>
          <input value={userNameValue} type="text" onChange={updateUsername} />
        </div>
        <div>
          <h5>Password</h5>
          <input
            value={passwordValue}
            type="password"
            onChange={updatePassword}
          />
        </div>
        <div>
          <button onClick={getToken}>enviar</button>
        </div>
      </div>
    </div>
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
