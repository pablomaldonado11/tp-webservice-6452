import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'] // Si usás .scss en tu proyecto, cambialo a './footer.scss'
})
export class FooterComponent {
  // Dejamos la clase vacía y limpia para que compile sin problemas
}