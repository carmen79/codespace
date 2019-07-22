import React from "react";

interface IProps {
  userNameInternoNavbar: string;
}

// Esto viene de la APP que es donde he decodificado el token
// son props del padre que uso en el hijo

const Navbar: React.FC<IProps> = props => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1"> Hello, {props.userNameInternoNavbar}</span>
    </nav>
  );
};

export default Navbar;
