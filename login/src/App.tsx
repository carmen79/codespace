import React from "react";
import "./App.css";
import Login from "./components/login";

const App: React.FC = () => {
  return (
    <div className="row">
      <div className="col-6">
        <Login />
      </div>
      <div className="col-6" />
    </div>
  );
};

export default App;
