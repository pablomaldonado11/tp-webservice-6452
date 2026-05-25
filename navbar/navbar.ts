import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TextToSpeechService } from '../../services/text-to-speech';; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  // Aquí puedes usar el servicio si lo necesitas en tu barra de navegación:
  constructor(private ttsService: TextToSpeechService) {}
}