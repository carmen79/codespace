
import { tokenReducer } from "./tokenReducer";
import { combineReducers } from 'redux';
import { travelReducer } from './travelsReducer';
import { ITravel } from "./interface";


export interface IGlobalState {
  token: string;
  travels:ITravel[];
}
export const reducers = combineReducers({

  token: tokenReducer,
  travels: travelReducer

});
