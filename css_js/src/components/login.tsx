import React from "react";


const Login: React.FC = props => {
    const [userNameValue, setUserNameValue] = React.useState("");
    const [passwordValue, setPasswordValue] = React.useState("");

    const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserNameValue(event.target.value);
    };
    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    };

    const getToken = () => {
        fetch("http://localhost:8080/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username: userNameValue, password: passwordValue })
        })
          .then(res => res.text())
          .then(token => {
            console.log(token);
            
          });
      };





    export default Login