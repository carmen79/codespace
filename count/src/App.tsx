import React from 'react';
import './App.css';
import Counter from './components/counter';
import Counter2 from './components/counter2';

const App: React.FC = () => {
  return (
    <div className='container'>
      <h3>
      <Counter />
      </h3>

      <h3>
      <Counter2 />
      </h3>
     
    </div>
  );
}

export default App;
