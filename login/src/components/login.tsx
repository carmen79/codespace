import React from "react";
// import { ITravel } from "../interfaces";
// import Table from "./table";

interface IProps {
  giveMeToken: (token: string) => void;
}
//Aquí voy a definir qué tipo de datos
//van a llegar al array

//Estas son las variables de estado
//Aquí he definido la variable travels, en la que guardaré los datos que lleguen
// de la petición fetch que son los viajes

const Login: React.FC<IProps> = props => {
  const [userNameValue, setUserNameValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  // const [travels, setTravels] = React.useState<ITravel[]>([]);

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };
  //con los datos que tenemos enviamos al servidor para que nos cree el token,
  // para ello declaramos una función fetch como la que tenemos en el proyecto dos
  //y la llamamos en el on click del botón

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
        props.giveMeToken(token);
        // console.log(token);
        // getTravels(token);
      });
  };

  //aquí hacemos la petición Fetch para listar viajes
  //lo que nos devuelve lo guardamos en un array

  // const getTravels = (token: string) => {
  //   fetch("http://localhost:8080/api/travels", {
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: "Bearer " + token
  //     }
  //   }).then(res => {
  //     if (res.ok) {
  //       res.json().then(travels => setTravels(travels));
  //     }
  //   });
  // };

  //en el return añadimos la tabla que se va a ir creando dinámicamente
  // para pintar los resultados de la petición fetch. Usamos el map

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

      {/* {travels.length > 0 && <Table travels={travels} />} */}
    </div>
  );
};

export default Login;
