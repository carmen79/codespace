import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../reducers";
import Navbar from "./navbar";
import { ITravel } from "../interface";
import { setTravel } from "../actions";
import Sidebar from "./sidebar";
interface IProps {
  userNameInternoHomepage: string;
}
interface IPropsGlobal {
  token: string;
  setTravel: (travels: ITravel[]) => void;
  travels: ITravel[];
}
// Esto viene de la APP que es donde he decodificado el token
// son props del padre que uso en el hijo

const Homepage: React.FC<IProps & IPropsGlobal> = props => {
  const getTravels = (token: string) => {
    fetch("http://localhost:8080/api/travels", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(travels => {
          props.setTravel(travels);
        });
      }
    });
  };

  useEffect(() => {
    if (props.token) {
      getTravels(props.token);
    }
  }, [props.token]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  travels: state.travels
});
const mapDispatchToProps = {
  setTravel: setTravel
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
