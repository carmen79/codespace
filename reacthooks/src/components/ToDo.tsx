import React from "react";

interface IProps {
    text: string;
    delete: () => void;
}
//El Todo no tiene estado en si mismo,
// el delete borra lo que hay en el array que viene del padre

const ToDo: React.FC <IProps>= props => {
    React.useEffect(()=> console.log(props.text),[]);// este array vacío 
    //el useEffect se ejecuta al menos una vez siempre, y para posteriores actualizaciones
    // se actualiza según se le diga en el [], si no le ponemos [] se ejecuta cada vez que se 
    //actualice. El [] nos indica las condiciones/razones que yo le digo por las que se 
    //va a ejecutar la función. El array vacío hace que solo se ejecute la función 
    //solo la primera vez
    return (
        <div>
            <div>{props.text}</div>
            <div>
                <button onClick={props.delete}>Delete</button>
                
            </div>
        </div>
    );
}

export default ToDo;