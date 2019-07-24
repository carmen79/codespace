import { ActionCreator } from "redux";
import { TAction } from "./actionTypes";
import { ITravel, IDecode } from './interface';

export const setToken: ActionCreator<TAction> = (token: string) => ({
  type: "SET_TOKEN",
  token: token
});

export const setTravel: ActionCreator<TAction> = (travels: ITravel[]) => ({
  type: "SET_TRAVEL",
  travels: travels
});
export const removeTravel: ActionCreator<TAction> = (travel_id: string) => ({
  type: "REMOVE_TRAVEL",
  travel_id
});
export const addTravel: ActionCreator<TAction> = (travel: ITravel) => ({
  type: "ADD_TRAVEL",
  travel: travel

});


export const setDecode: ActionCreator<TAction> = (decode: IDecode) => ({
  type: "SET_DECODE",
  decode: decode
});