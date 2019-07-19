import { ActionCreator } from "redux";
import { TAction } from "./actionTypes";
import { ITravel } from './interface';

export const setToken: ActionCreator<TAction> = (token: string) => ({
  type: "SET_TOKEN",
  token: token
});

export const setTravel: ActionCreator<TAction> = (travels: ITravel[]) => ({
  type: "SET_TRAVEL",
  travels: travels
});