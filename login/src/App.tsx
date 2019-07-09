import React from "react";
import "./App.css";
import Login from "./components/login";
import LoginClass from "./components/login_class";

const App: React.FC = () => {
  const [token, setToken] = React.useState("");
  const giveMeToken = (token: string) => {
    setToken(token);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <Login giveMeToken={giveMeToken} />
        </div>
        <div className="col-6">
          <LoginClass />
        </div>
      </div>
    </div>
  );
};

export default App;
