import { ICity } from './interfaces';


// aquí definimos el tipo de acción que queremos enviarle al reducer
// creamos un fichero actions donde ponemos las funciones de las acciones

type TSendTokenAction = {
    type: "SEND_TOKEN";
    token: string;
  };
  
type TsetCitiesAction = {
    type: "SET_CITIES";
    cities: ICity[]
}

  export type TAction = TSendTokenAction | TsetCitiesAction
