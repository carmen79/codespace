import React from "react";
import "./App.css";
import { directive } from "@babel/types";

// Esto nos limita el tipo de datos que lleva el input, es tipado

interface IState {
}
interface IProps {
}
class App_footer extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props, state);
  }

  render() {
    return (
      <div>
        <h1> Esto es un ejemplo basico de componente react sin estado y sin propiedades</h1>
      </div>
    );
  }
}

export default App_footer;
