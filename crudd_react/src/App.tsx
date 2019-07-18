import React from 'react';
import './App.css';
import Login from './components/login';

const App: React.FC = () => {

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <Login />

        </div>
        </div>
        </div>
    
  );
}


// aqui, hacemos la condición de si hay token muestra una página
// si no hay token se muestra la página de login

{/* <BrowserRouter>
     {!token && <LoginPage saveToken={getToken} />}
     {token && <LayoutPage  username={username}/>}
     <Redirect to="/" />
   </BrowserRouter> */}
export default App;
