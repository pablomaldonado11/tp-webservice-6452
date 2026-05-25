import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TextToSpeechService {

  private apiUrl =
    'https://open-ai-text-to-speech1.p.rapidapi.com/';

  private apiKey ='c0bde0c186mshed865ba92c0418fp111c5fjsn954d5f9f551d';
    

  private apiHost ='open-ai-text-to-speech1.p.rapidapi.com';
    

  constructor(private http: HttpClient) { }

  generarAudio(
    texto: string,
    voz: string
  ): Observable<Blob> {

    const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.apiKey)
      .set('x-rapidapi-host', this.apiHost)
      .set('Content-Type', 'application/json');

    const body = {
      model: 'tts-1',
      input: texto,
      voice: voz
    };

    return this.http.post(
      this.apiUrl,
      body,
      {
        headers,
        responseType: 'blob'
      }
    );
  }
}