import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login';
import { IGlobalState } from './reducers';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Homepage from './components/homepage';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { statement } from '@babel/template';

interface IPropsGlobal {
  token:string;
}

const App: React.FC<IPropsGlobal>= (props) => {
  // const [token, setToken] = React.useState("");
  const [username, setUsername] = React.useState("");

  // const updateToken = (token: string) => {
  //   setToken(token);
  // };

  useEffect(() => {// aqui hacemos el useEffect para que me devuelva el nombre de mi usuario
    if (props.token) {
      const decode = jwt.decode(props.token);
      if (typeof decode !== "string" && decode !== null) {// si el tipo de decodifiacion es didstinto de string y distinto de null decodifacame el username
        setUsername(decode.username);
      }
    }
  }, [props.token]);


  useEffect(() => console.log(username), [username]);// aqui me imprime el nombre de mi usuario

  return (
    <BrowserRouter>
      {!props.token && <Login />}
      {props.token && <Homepage userName ={username}/>}
      <Redirect to="/" />
    </BrowserRouter>
  );
};

// export default App;

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});
// El matDispatch nos sirve para enviar una acción desde el padre hacia el Store

export default connect(
  mapStateToProps
)(App);
