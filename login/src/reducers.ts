import { combineReducers } from "redux";
import { valueReducer } from "./valueReducer";
import { tokenReducer } from "./tokenReducer";

export interface IGlobalState {
  value: number;
  token: string;
}
export const reducers = combineReducers<IGlobalState>({
  value: valueReducer,
  token: tokenReducer
});
