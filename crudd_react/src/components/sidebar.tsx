import React from "react";
import { ITravel } from '../interface';
import { connect } from "react-redux";
import { IGlobalState } from "../reducers";
import { Link } from "react-router-dom";

interface IPropsGlobal {
  travels: ITravel[];
}

const Sidebar: React.FC<IPropsGlobal> = props => {


  return (
    <div className="container">
      {props.travels.map(t => (
        <div className="row" key={t.destino}>
          <div className="col-4">
            <Link to={"/travels/" + t._id}>
              {t.destino}
            </Link>
          </div>
        </div>
      ))}
      <div>
        <Link className="btn btn-secondary" to={"/travels/newtravel"}>
          Nuevo Viaje
      </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  travels: state.travels
});

export default connect(mapStateToProps)(Sidebar);