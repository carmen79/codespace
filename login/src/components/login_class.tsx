import React from "react";
import { ITravel } from "../interfaces";
import TableClass from "./table_class";

interface IState {
  username: string;
  password: string;
  travels: ITravel[]; // es un array, aqui vamos a guardar los travels
}

class LoginClass extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    //esto es el estado inicial de cada cosa
    this.state = {
      username: "",
      password: "",
      travels: []
    };
  }

  updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };
  updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  getToken = () => {
    fetch("http://localhost:8080/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.text())
      .then(token => this.getTravels(token));
  };

  getTravels = (token: string) => {
    fetch("http://localhost:8080/api/travels", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      if (res.ok) {
        res
          .json()
          .then((travels: ITravel[]) => this.setState({ travels: travels }));
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <h5>User Name</h5>
          <input
            value={this.state.username}
            type="text"
            onChange={this.updateUsername}
          />
        </div>
        <div>
          <h5>Password</h5>
          <input
            value={this.state.password}
            type="text"
            onChange={this.updatePassword}
          />
        </div>
        <div>
          <button onClick={this.getToken}>enviar</button>
        </div>
        {this.state.travels.length > 0 && (
          <TableClass travels={this.state.travels} />
        )}
      </div>
    );
  }
}

export default LoginClass;
