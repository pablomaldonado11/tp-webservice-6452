import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutosService {

  private urlAutos =
    'https://car-specs.p.rapidapi.com/v2/cars';

  constructor(
    private http: HttpClient
  ) {}

  // ---------------- MARCAS ----------------

  getMarcasAutos(): Observable<any> {

    const headers = new HttpHeaders()
      .set('x-rapidapi-key', 'c0bde0c186mshed865ba92c0418fp111c5fjsn954d5f9f551d')
      .set(
        'x-rapidapi-host',
        'car-specs.p.rapidapi.com'
      );

    return this.http.get(
      `${this.urlAutos}/makes`,
      { headers }
    );
  }

  // ---------------- MODELOS ----------------

  ModelosPorMarca(
    make: string
  ): Observable<any> {

    const headers = new HttpHeaders()
      .set('x-rapidapi-key', 'c0bde0c186mshed865ba92c0418fp111c5fjsn954d5f9f551d')
      .set(
        'x-rapidapi-host',
        'car-specs.p.rapidapi.com'
      );

    return this.http.get(
      `${this.urlAutos}/models?make=${make}`,
      { headers }
    );
  }
}