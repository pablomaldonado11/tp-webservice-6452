import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para usar async o formateos si hiciera falta
import { CurrencyService } from '../../services/currency';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink, RouterOutlet],
  templateUrl: './conversor.html',
  styleUrls: ['./conversor.css'] // Opcional, para los estilos oscuros y naranjas de la foto
})
export class ConversorComponent {
  cantidad: number | null = null; // Empezamos vacío para que se vea el placeholder
  de: string = 'USD';
  a: string = 'ARS';
  resultado: number | null = null;

  constructor(private currencyService: CurrencyService) {}

  realizarConversion() {
    if (!this.cantidad || this.cantidad <= 0) return;

    this.currencyService.convertir(this.de, this.a, this.cantidad).subscribe({
      next: (data: any) => {
        // La API de APILayer devuelve la estructura: { success: true, result: X }
        if (data.success) {
          this.resultado = data.result;
        }
      },
      error: (err) => {
        console.error('Error al conectar con APILayer:', err);
      }
    });
  }
}