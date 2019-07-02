import React from "react";

interface Iprops {
    color: string;
    text?:string;

}

const Main: React.FC <Iprops> = props => {
    return (
        <main style = {
            {
                backgroundColor: props.color
            }
        }>
    {props.text ? props.text:<strong>NO HAY TEXTO</strong>}
    </main>
    );
};



export default Main;