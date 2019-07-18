import { TAction } from "./actionTypes";
import { ICity } from './interfaces';

const initialState: ICity[] = [] //estos datos vendrán de la llamada fecth a la dirección que dio Angel

export const citiesReducer =(
   state: ICity[] = initialState,
   action: TAction
): ICity[] => {
   if(action.type === 'SET_CITIES'){
       return action.cities
   }
   return state;
}