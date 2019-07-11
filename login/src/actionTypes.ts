import { ITravel } from "./interfaces";

//se describen el tipo de acciones que se van a usar

type TIncrementAction = {
  type: "INCREMENT_NUMBER";
};
type TDecrementAction = {
  type: "DECREMENT_NUMBER";
};
type TResetAction = {
  type: "RESET_NUMBER";
};
type TSetAction = {
  type: "SET_NUMBER";
  newValue: number;
};
type TSetTokenAction = {
  type: "SET_TOKEN";
  token: string;
};
type TSetTravelAction = {
  type: "SET_TRAVEL";
  travels: ITravel[];
};

export type TAction =
  | TIncrementAction
  | TDecrementAction
  | TResetAction
  | TSetAction
  | TSetTokenAction
  | TSetTravelAction
