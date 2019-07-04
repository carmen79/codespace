import React from "react";
import { render } from "react-dom";

interface Iprops {
  imagen?: string;
  name?: string;
  text?: string;
}

interface IState {
    nClicks:number;
}
//Esto es crear un componente con clase
//react component es una clase, a la cual le añadimos el render, por eso le ponemos el extends
//click es una función de clase, se escribe solo con paréntesis y abrir llave
//esta función como es nueva no va a reconocer a los this, para que 
//los reconozca al llamar a la función le añadimos el .bin(this) y esto lo arreglamos definiendo el constructor

//Los componentes tienen estado, esto se lo pasamos a la clase al igual que Iprops la defino en una interface tb




class CardClass extends React.Component<Iprops, IState> {
    constructor(props:Iprops) {
        super(props);//llamo al constructor de la clase que extiendo

        this.click = this.click.bind(this);
        this.click2 = this.click2.bind(this);
        this.state = {
            nClicks:0
        }
    }
  
//el setState te hace la funcion y te mantiene el nuevo estado
  click() {
    this.setState({nClicks: this.state.nClicks +1});
  }
  click2(){
    this.setState({nClicks: this.state.nClicks -1});

  }
  render() {
    return (
      <div className="card" style={{ width: "18rem", backgroundColor: "blue" }}>
        <img
          className="card-img-top"
          src={this.props.imagen}
          onClick={this.click}
          alt="Card image cap"
          style={{ width: "80px", height: "80px" }}
        />
        <div className="card-body">
          <p className="card-text" style={{ color: "white" }}onClick={this.click2}>
            {" "}
            {this.props.name}{" "}
          </p>
          <p className="card-text" style={{ color: "white" }} >
            {" "}
            {this.props.text}{" "}
          </p>
          <p style={{ color: "white" }}>{this.state.nClicks}</p>
        </div>
      </div>
    );
  }
}

export default CardClass;
