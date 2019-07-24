import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className ="container mt-5">

      <div className="input-group mb-3">
      <div className="input-group-prepend">
      <button className="btn btn-outline-secondary" type="button" id="button-addon1">Enviar</button>
    </div>
    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
    </div>

    </div>
  );
}

export default App;
