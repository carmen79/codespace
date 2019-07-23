
import { tokenReducer } from "./tokenReducer";
import { combineReducers } from 'redux';
import { travelReducer } from './travelsReducer';
import { ITravel, IDecode } from './interface';
import { decodeReducer } from "./decodeReducer";


export interface IGlobalState {
  token: string;
  travels: ITravel[];
  decode:IDecode;
}
export const reducers = combineReducers({

  token: tokenReducer,
  travels: travelReducer,
  decode: decodeReducer


});
