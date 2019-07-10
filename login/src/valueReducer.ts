import { TAction } from './actionTypes';
// en el recucer tenemos valor inicial y action
//el valor inicial lo podemos inicar desde aquí, en este caso
//lo hemos inicializado a 0


const initialState: number = 0;

export const valueReducer = (
  state: number =  initialState,
  action: TAction
  ): number  => {
  if (action.type === "INCREMENT_NUMBER") {
    return state + 1
  }
  if (action.type === "DECREMENT_NUMBER") {
    return state - 1
  }
  if (action.type === "RESET_NUMBER") {
    return initialState;
  }

  if (action.type ===  "SET_NUMBER"){
    return action.newValue;
  }
   


  return state;
};
