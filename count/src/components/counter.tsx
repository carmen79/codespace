import React from 'react'

const Counter: React.FC = () =>{
    const [count,setCount] = React.useState(0);
    const[intervalId, setIntervalId] = React.useState <number|undefined>();
    const stop = ()=>{
        if(intervalId) { // si ya hay intervalId, podemos pararlo con clearInterval
            window.clearInterval(intervalId);
            setIntervalId(undefined);
        }
    };
    const play = ()=> {
        if(!intervalId){ // si no hay intervalId es que no se ha iniciado el contador, por tanto empieza a contar
            const intervalId = window.setInterval(()=> setCount (c=>c+1), 1000)
            setIntervalId (intervalId);
        }
    };

    const reset =() => setCount(0);

// hemos creado una const para cada una de las funciones a continuación en la vista llamamos 
// a cada una de ellas en su botón correspondiente
return (
    <div className= 'container'>
        {count}
      <button onClick={play}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
)

}

export default Counter
