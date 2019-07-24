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
type TRemoveTravelAction = {
  type: "REMOVE_TRAVEL";
  travel_id: string;
};
type TAddTravelAction = {
  type: "ADD_TRAVEL";
  travel: ITravel;
};


export type TAction =
  | TSetTokenAction
  | TSetTravelAction
  | TSetDecodeAction
  | TRemoveTravelAction
  | TAddTravelAction