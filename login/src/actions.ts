import { ActionCreator } from "redux";
import { TAction } from "./actionTypes";

//este actionCreator y TAction son tipos y hay que ponerlos

export const incrementNumber: ActionCreator<TAction> = () => ({
  type: "INCREMENT_NUMBER"
});

export const decrementNumber: ActionCreator<TAction> = () => ({
  type: "DECREMENT_NUMBER"
});

export const resetNumber: ActionCreator<TAction> = () => ({
  type: "RESET_NUMBER"
});
export const setNumber: ActionCreator<TAction> = (newValue: number) => ({
  type: "SET_NUMBER",
  newValue
});

export const setToken: ActionCreator<TAction> = (token: string) => ({
  type: "SET_TOKEN",
  token
});

//aquí hemos creado una acción, que recibe un número
// tiene un tipo  y el objeto ({}) será lo que le pasamos al
// reducer. Esta acción la podemos usar, al lanzarla llega a todos los
// reducer que haya en la aplicación
