import React from "react";
import "./App.css";
import Todo from "./components/todo";
import { directive } from "@babel/types";

// Esto nos limita el tipo de datos que lleva el input, es tipado

interface IState {
  texts: string[];
  inputValue: string;
}

class App_todo extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      texts: [],
      inputValue: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.updateInput}
          type="text"
        />
        <div>
          <button onClick={this.addTodo}>Add</button>
        </div>

        <div>
          {this.state.texts.map((text, index) => (
            <Todo
              key={text + index}
              text={text}
              delete={() => this.deleteTodo(index)}
            />
          ))}
        </div>
      </div>
    );
  }


  updateInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
    console.log("Estado interno : " + this.state.inputValue);
  }
  addTodo() {
    const texts = this.state.texts;
    texts.push(this.state.inputValue);
    this.setState({ texts, inputValue: "" });
  }
  deleteTodo(index: number) {
    const texts = this.state.texts;
    texts.splice(index, 1);
    this.setState({ texts });
  }

}

export default App_todo;
