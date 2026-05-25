import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // El endpoint base para hacer conversiones directas usando APILayer
  private apiUrl = 'https://api.apilayer.com/currency_data/convert';
  
  // Tu API Key extraída de la consola de APILayer
  private apiKey = 'tzApaP5SNGLoCwgxc9RmaoGRWZypaG2V'; 

  constructor(private http: HttpClient) { }

  convertir(monedaOrigen: string, monedaDestino: string, cantidad: number): Observable<any> {
    // Configuramos el encabezado 'apikey' que exige la plataforma
    const headers = new HttpHeaders().set('apikey', this.apiKey);
    
    // Armamos la URL con los parámetros necesarios: to, from y amount
    const url = `${this.apiUrl}?to=${monedaDestino}&from=${monedaOrigen}&amount=${cantidad}`;

    // Hacemos la petición GET enviando los headers
    return this.http.get(url, { headers });
  }
}