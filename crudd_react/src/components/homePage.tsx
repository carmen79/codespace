import React from "react";
import { connect } from 'react-redux';
import { IGlobalState } from "../reducers";

interface IProps{
    userName: string
}
// Esto viene de la APP que es donde he decodificado el token


const Homepage: React.FC<IProps> = props => {


    return (
        <div className="container">
            <div className="form-group">
                <div>
                    <h5>HOLAAA {props.userName} </h5>
                </div>

            </div>
        </div>
    );
};

// const mapStateToProps = (state:IGlobalState)=>{

// }
export default Homepage
