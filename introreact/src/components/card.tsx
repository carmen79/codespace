import React from "react";

interface Iprops {
  imagen?: string;
  name?: string;
  text?: string;
}
//EN este componente definico como función hemos añadido 
//estados usando la funcionalidad Hoock que es 

const Card: React.FC<Iprops> = props => {
  const [nClicks, setnClicks] = React.useState(0);

  const clickOnImage = () => {
    setnClicks(currentnClicks => currentnClicks + 1);

  };
  const clickOnName = () => {
    setnClicks(currentnClicks => currentnClicks - 1);
  };


  return (

    <div
      className="card border-dark"
      style={{ width: "18rem", margin: "auto" }}
    >
      {/* eslint-disable-next-line */}
      <img
        src={props.imagen}
        className="card-img-top logo"
        onClick={clickOnImage} //al llamar a la función ponemos this y el bind
      />
      <div className="card-body text-dark">
        <h5 className="card-title" onClick={clickOnName}>
          {props.name}
        </h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text">{nClicks}</p>
      </div>
      {/* <div className="card-footer">
      <button onClick={props.remove}>DELETE</button>
    </div> */}
    </div>
  );
}
export default Card;
