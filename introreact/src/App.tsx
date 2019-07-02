import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import Card from "./components/card";
import CardClass from "./class_component/class_card";

// Esto nos limita el tipo de datos que lleva user, es tipado
interface IUser {
  name: string;
  text: string;
  imagen: string;
}

const App: React.FC = () => {
  const users: Array<IUser> = [
    {
      imagen:
        "https://img2.freepng.es/20180421/wtq/kisspng-avatar-user-profile-computer-icons-woman-5adbf57ac4e302.8896814815243646668065.jpg",
      name: "Carmen",
      text: "primera de map"
    },
    {
      imagen:
        "https://img2.freepng.es/20180421/wtq/kisspng-avatar-user-profile-computer-icons-woman-5adbf57ac4e302.8896814815243646668065.jpg",
      name: "Pepita",
      text: "segunda de map"
    }
  ];
  return (
    <div style={{ width: "50%" }}>
      {/* EL key se pone en el primer elemento que haya en este caso el card, tiene que ser un elemento único */}
      {users.map(user => (
        <Card
          key={user.name}
          imagen={user.imagen}
          name={user.name}
          text={user.text}
        />
      ))}
      {users.map(user => (
        <CardClass
          key={user.name}
          imagen={user.imagen}
          name={user.name}
          text={user.text}
        />
      ))}
    </div>
  );
};

export default App;
