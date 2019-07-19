import React from "react";
import { ITravel } from '../interface';
import { connect } from "react-redux";
import { IGlobalState } from "../reducers";
import { Link } from "react-router-dom";

interface IPropsGlobal{
travels: ITravel[]
}

const Sidebar:React.FC<IPropsGlobal> = props => {

  return(
    <div className="container">
     {props.travels.map(u => (
       <div className="row" key={u.destino}>
         <div className="col-4">
         <Link to={"/travels/" + u._id}>
         {u.destino}
         </Link>
         </div>
       </div>
     ))}
   </div>
  )


}

const mapStateToProps = (state: IGlobalState) => ({
 
  travels: state.travels
});


export default connect (mapStateToProps)(Sidebar);