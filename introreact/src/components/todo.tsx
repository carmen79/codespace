import React from "react";

interface Iprops {
  text: string;
  delete: () => void;
}

class Todo extends React.Component<Iprops> {
  //render es la función donde le decimos a React
  // lo que queremos dibujar en pantalla
  render() {
    return (
      <div>
        <div> {this.props.text}</div>
        <div>
          <button onClick={this.props.delete}>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
