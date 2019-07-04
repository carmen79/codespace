import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  apiUrl = 'https://api.themoviedb.org/3/';
  apiKey = '51c725de6ddb9024213b00473cda137b';
  constructor(private _http: HttpClient) {}
  movieTheaters() {
    return this._http.get( `${this.apiUrl}discover/movie?primary_release_
    date.gte=2019-06-04&primary_release_date.lte=2019-07-04&paiKey=${this.apiKey}`);
  }

}
