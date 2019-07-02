import React from "react";

interface Iprops {
  imagen?: string;
  name?: string;
  text?: string;
}

const Card: React.FC<Iprops> = props => {
  const clickOnImage=()=>console.log(props.name);
  return (
    <div className="card" style={{ width: "18rem", backgroundColor: "blue" }}>
      <img
        className="card-img-top"
        src={props.imagen}
        onClick = {clickOnImage}
        alt="Card image cap"
        style={{ width: "80px", height: "80px" }}
     
      />
      <div className="card-body">
        <p className="card-text" style={{color:"white"}}> {props.name} </p>
        <p className="card-text" style={{color:"white"}}>{props.text} </p>
      </div>
    </div>
  );
};



export default Card;
