import { ITravel } from "./interface";


type TSetTokenAction = {
  type: "SET_TOKEN";
  token: string;
};

type TSetTravelAction = {
  type: "SET_TRAVEL";
  travels: ITravel[];
};

export type TAction =
  | TSetTokenAction
  | TSetTravelAction