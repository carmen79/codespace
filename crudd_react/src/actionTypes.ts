import { ITravel, IDecode } from './interface';


type TSetTokenAction = {
  type: "SET_TOKEN";
  token: string;
};

type TSetTravelAction = {
  type: "SET_TRAVEL";
  travels: ITravel[];
};

type TSetDecodeAction = {
  type: "SET_DECODE";
  decode: IDecode;
}

export type TAction =
  | TSetTokenAction
  | TSetTravelAction
  | TSetDecodeAction