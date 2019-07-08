import React from "react";
import "./App.css";
import ToDo from "./components/ToDo";

//aqui no hay interface porq este es el componente padre,
// y además no tiene propiedades solo estados que es lo
//que está definido en const.
//en el hijo, que es el componente ToDo, si se le define el interface con
// sus propiedades que hereda del padre.

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [textArray, setTexts] = React.useState<string[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createToDo = () => {
    if (inputValue.length >0 && !textArray.includes(inputValue)){
    setTexts([...textArray, inputValue]); //esto es creo un array con los textos ya metidos mas el nuevo que meto, esto se va pintando en el listado que va apareciendo
    setInputValue(""); // aqui ponemos el input en blanco cuando pulsamos botón de ADD
    }
    console.log("Valor del array:" + textArray);
  };

  //el borrar del array solo lo puede hacer el padre que es el que tiene el array y lo puede manejar
  //desde el hijo no puedo borrar algo del array

  const deleToDo = (index: number) => {
    textArray.splice(index, 1);
    setTexts([...textArray]); // con esto crea un array nuevo y copia lo que hay en el array, si no le pones los 3 puntos coge el array que existe y no entiende si hay algo nuevo
  };
  //REact no compara el contenido del array para actualizarlo
  //lo clonamos para que haya dos arrays y al comparar se quede con
  //el nuevo con el que tiene los cambios
  return (
    <div>
      <input value={inputValue} onChange={handleInput} type="text" />

      <div>
        <button onClick={createToDo}>Add</button>
      </div>

      <div>
        {textArray.map((t, i) => (
          //t es texto e i es index
          <ToDo key={t} text={t} delete={() => deleToDo(i)} />

          //el key esta en todos los componentes hay que ponerlo siempre en map
          //el text y el delete son las props del componente
        ))}
      </div>
    </div>
  );
};

export default App;
