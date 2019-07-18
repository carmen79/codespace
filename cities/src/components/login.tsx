import React from "react";
import { connect } from "react-redux";
import { sendToken } from "../action";

interface IPropsGlobal {
  sendToken: (token: string) => void;
}

// Una de las primeras cosas para hacer: definir nuestro componente
// en este caso lo definimos como función
// Aquí cogemos los datos del input

const Login: React.FC<IPropsGlobal> = props => {
  const [userNameValue, setUserNameValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  //Aquí lanzamos función para solicitar token
  //es una petición fetch que va al servidor allí
  //genera el token y lo envía de vuelta, este token en principio se guarda aquí
  // pero lo que queremos es guardarlo en el estore, para ello tenemos que hacer las
  //typeactions + action y la reduces + token reduce.

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
        props.sendToken(token);
        // getTravels(token);
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
const mapDispatchToProps = { sendToken: sendToken };

export default connect(
  null,
  mapDispatchToProps
)(Login);
