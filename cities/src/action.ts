import { ActionCreator } from "redux";
import { TAction } from "./actionTypes";
import { ICity } from "./interfaces";

export const sendToken: ActionCreator<TAction> = (token: string) => ({
  type: "SEND_TOKEN",
  token
});

export const setCities: ActionCreator<TAction> = (cities: ICity[]) =>({
    type: "SET_CITIES",
    cities
});

// esta función recibe el token, tiene un tipo definido
// y el objeto es lo que le enviamos al reducer
