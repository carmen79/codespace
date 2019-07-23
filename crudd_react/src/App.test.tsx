import "@testing-library/react/cleanup-after-each";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByTestId, fireEvent } from "@testing-library/react";
import Login from './components/login';
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { reducers } from "./reducers";
import { Provider } from "react-redux";


const store = createStore(reducers, devToolsEnhancer({}));

it('el botón de iniciar sesión no funciona hasta que el input de la contraseña esté relleno', () => {
 const {getByTestId}=render(
  <Provider store={store}>
 <Login/>
 </Provider>
 );
 const password_input = getByTestId("password_input") as HTMLInputElement;
 fireEvent.change(password_input, {target:{value:"Laura"}});
 expect(password_input.value).toBe("Laura");
});
