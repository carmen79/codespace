export interface ITravel {
  _id: string;
  destino: string;
  fechaInicio: Date;
  fechaFin: Date;
  descripcion: string;
  userId: string;
}

export interface IDecode {
  _id?: string;
  username?: string;
}
