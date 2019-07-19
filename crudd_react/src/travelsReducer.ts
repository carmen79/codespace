import { TAction } from './actionTypes';
import { ITravel } from './interface';


// en el reducer tenemos valor inicial y action
//el valor inicial lo podemos inicar desde aquí, en este caso
//el valor inicial del token es ""??
//¿Cual es la acción?

const initialState: ITravel[] = [];

export const travelReducer = ( 
  state:ITravel[]= initialState,
  action:TAction
): ITravel[] => {
  if(action.type=="SET_TRAVEL") {
    return action.travels
  }
  return state
}



