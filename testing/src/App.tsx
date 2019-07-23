import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [count,setCount]= useState(0);
  const add = ()=> setCount(c =>c+1);
  const sub = ()=> setCount(c=> (c>0? c-1:0))
  return (
  <div>
    <div>
    <button data-testid="sub_button" onClick={sub}>-</button>
    </div>
    <div>
    <button data-testid="add_button" onClick={add}>+</button>
    </div>
    <div>
      <span data-testid="count_span">{count}</span>
    </div>
    
  </div>
  );
}

export default App;
