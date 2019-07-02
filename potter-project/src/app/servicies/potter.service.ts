import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
  
export class PotterService {

  constructor(private _http: HttpClient){ 

  console.log ('Servicio Inicializado');
  }

  people(){
    console.log ('Obtener a la People');
  }


}
