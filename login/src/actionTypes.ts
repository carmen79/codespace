//se describen el tipo de acciones que se van a usar

type TIncrementAction = {
  type: "INCREMENT_NUMBER";
};
type TDecrementAction = {
  type: "DECREMENT_NUMBER";
};
type TResetAction = {
  type: "RESET_NUMBER";
};
type TSetAction = {
  type: "SET_NUMBER";
  newValue: number;
};
type TSetTokenAction = {
  type: "SET_TOKEN";
  token: string;
};

export type TAction =
  | TIncrementAction
  | TDecrementAction
  | TResetAction
  | TSetAction
  | TSetTokenAction;
