import React from 'react';
import './App.css';
import ToDo from './components/ToDo'

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [textArray, setTexts] = React.useState([""]);

  /** 
   * Esta funcion se ejecuta cuando cambia el valor de input desde el navegador
   * Actualizamos el valor del estado interno del componente (inputValue) con 
   * lo que venga del navegador
  */
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    textArray.push(inputValue);
    setTexts(textArray);
    setInputValue(""); // aqui ponemos el input en blanco cuando pulsamos botón de ADD

    console.log("Valor del array:" + textArray)
  };

  return (

    <div>
      <input
        value={inputValue}
        onChange={handleInput}
        type="text"
      />

      <div>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        {textArray.map((aText, index) => (

          ToDo({})
        ))}
      </div>
    </div>
  );
}

export default App;
