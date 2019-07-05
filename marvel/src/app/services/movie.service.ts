import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  apiUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=5f5fa6b22ea549273fd85bcf70dde268&&';

  // Inyección de dependencia
  constructor(private _http: HttpClient) {
    console.log('Connected to API');
  }

  movieTheaters() {
    // We can set a let with actual Date formatted to get the movies of last month
    return this._http
      .get(`${this.apiUrl}discover/movie${this.apiKey}primary_release_date.gte=2019-06-04&primary_release_date.lte=2019-07-04`);
  }
  movie(id: number) {
    return this._http.get(`${this.apiUrl}movie/${id}${this.apiKey}`);
  }

}
