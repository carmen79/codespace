import React from 'react';
import './App.css';
import Login from './components/login';
import { tokenReducer } from './tokenReducer';

interface IPropsGlobal{
  cities:any[];
  token:string;
  setCities //la tengo que definir en el action
}
const App: React.FC<IPropsGlobal> = (props) => {
  const getCities = (token: string) => {
    fetch("192.168.100.2/cities", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(cities => props.setCities(cities));//esta función tiene que venir definida de las actions y pasada como props
      }
    });
  };
  useEffect(() => {
    if (props.token) {
      getCities(props.token);
    }
  }, [props.token]);


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <Login />
         
      </div>
      </div>
      </div>
  );
}

export default App;
