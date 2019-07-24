import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [file, setFile] = useState();

const send = () => {
  const data = new FormData();
  data.append("file", file);
  fetch("http://localhost/upload", {method: "POST", body:data});
};
const handleFileUpload = (event:any)=> {
  setFile (event.target.files[0]);
}
  return (
    <div>
      <input type="file" onChange={handleFileUpload}/>
      <button onClick= {send}>Enviar</button>
      
    </div>
  );
}

export default App;
