import React from "react";
import { IDecode } from "../interface";
import { connect } from "react-redux";
import { IGlobalState } from "../reducers";

interface IPropsGlobal {
  decode: IDecode;
}

// Esto viene de la APP que es donde he decodificado el token
// son props del padre que uso en el hijo

const Navbar: React.FC<IPropsGlobal> = props => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1">
        Hello, {props.decode.username}
      </span>
    </nav>
  );
};
const mapStateToProps = (state: IGlobalState) => ({

  decode: state.decode
});
export default connect (mapStateToProps)(Navbar);
