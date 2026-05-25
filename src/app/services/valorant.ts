import { Injectable }
from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import { Observable }
from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValorantService {

  private apiUrl =
    'https://valorant-esports1.p.rapidapi.com/v1/results';

  private apiKey =
    'c0bde0c186mshed865ba92c0418fp111c5fjsn954d5f9f551d';

  private apiHost =
    'valorant-esports1.p.rapidapi.com';

  constructor(
    private http: HttpClient
  ) {}

  obtenerResultados(
    pagina: number = 1
  ): Observable<any> {

    const headers =
      new HttpHeaders()

      .set(
        'x-rapidapi-key',
        this.apiKey
      )

      .set(
        'x-rapidapi-host',
        this.apiHost
      );

    return this.http.get(

      `${this.apiUrl}?page=${pagina}`,

      {
        headers
      }
    );
  }
}