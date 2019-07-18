import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { ICity } from "./interfaces";


export interface IGlobalState {
  token:string;
  cities: ICity[];
}
export const reducers = combineReducers({
  token: tokenReducer
});
