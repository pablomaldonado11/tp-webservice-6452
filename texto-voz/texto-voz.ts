import {
  Component,
  ChangeDetectorRef
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TextToSpeechService }
from '../../services/text-to-speech';

import {
  RouterLink,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-texto-voz',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './texto-voz.html',
  styleUrls: ['./texto-voz.css']
})

export class TextoVozComponent {

  textoIngresado: string = '';

  idiomaSeleccionado: string = 'Spanish';

  vozSeleccionada: string = 'alloy';

  audioUrl: string | null = null;

  cargando: boolean = false;

  constructor(
    private ttsService: TextToSpeechService,
    private cd: ChangeDetectorRef
  ) {}

  convertirTextoAAudio(): void {

    if (!this.textoIngresado.trim()) {
      return;
    }

    this.cargando = true;

    // Limpia audio anterior
    if (this.audioUrl) {
      URL.revokeObjectURL(this.audioUrl);
      this.audioUrl = null;
    }

    this.ttsService.generarAudio(
      this.textoIngresado,
      this.vozSeleccionada
    )
    .subscribe({

      next: (blob: Blob) => {

        console.log('Blob recibido:', blob);
        console.log('Tipo:', blob.type);

        // Crear URL temporal
        const blobUrl =
          URL.createObjectURL(blob);

        // Asignar al audio
        this.audioUrl = blobUrl;

        // Fuerza actualización de Angular
        this.cd.detectChanges();

        // Reproduce automáticamente
        const audio =
          new Audio(this.audioUrl);

        audio.play();

        this.cargando = false;
      },

      error: (err) => {

        console.error(
          'Error al generar audio',
          err
        );

        this.cargando = false;
      }
    });
  }
}