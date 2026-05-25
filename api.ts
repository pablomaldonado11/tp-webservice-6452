import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private urlPeliculas =
    'https://imdb-top-100-movies.p.rapidapi.com/';

  constructor(
    private http: HttpClient
  ) {}

  getTopPeliculas(): Observable<any> {

    const headers = new HttpHeaders()
      .set('x-rapidapi-key', 'TU_API_KEY')
      .set(
        'x-rapidapi-host',
        'imdb-top-100-movies.p.rapidapi.com'
      );

    return this.http.get(
      this.urlPeliculas,
      { headers }
    );
  }
}