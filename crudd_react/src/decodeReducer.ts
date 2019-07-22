import { TAction } from "./actionTypes";
import { IDecode } from "./interface";

// en el reducer tenemos valor inicial y action
//el valor inicial lo podemos inicar desde aquí, en este caso
//el valor inicial del token es ""??
//¿Cual es la acción?

const initialState: IDecode = {};

export const decodeReducer = (
  state: IDecode = initialState,
  action: TAction
): IDecode => {
  if (action.type == "SET_DECODE") {
    return action.decode;
  }
  return state;
};
