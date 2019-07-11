import { combineReducers } from "redux";
import { valueReducer } from "./valueReducer";
import { tokenReducer } from "./tokenReducer";
import { ITravel } from './interfaces';
import { travelReducer } from './travelReducer';

export interface IGlobalState {
  value: number;
  token: string;
  travels: ITravel[];
}
export const reducers = combineReducers<IGlobalState>({
  value: valueReducer,
  token: tokenReducer,
  travels: travelReducer

});
