import { TAction } from "./actionTypes";

// aquí en el reducer tenemos un valor inicial que es state : string=""
// tenemos una action

export const tokenReducer = (state: string = "", action: TAction): string => {
  if (action.type === "SEND_TOKEN") {
    return action.token;
  }
  return state;
};
