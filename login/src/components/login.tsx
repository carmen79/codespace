import React from "react";

const Login: React.FC = () => {
  const [userNameValue, setUserNameValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

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
      .then(token => console.log(token));
  };

  return (
    <div>
      <div>
        <h5>User Name</h5>
        <input value={userNameValue} type="text" onChange={updateUsername} />
      </div>
      <div>
        <h5>Password</h5>
        <input value={passwordValue} type="text" onChange={updatePassword} />
      </div>
      <div>
        <button onClick={getToken}>enviar</button>
      </div>
    </div>
  );
};

export default Login;
