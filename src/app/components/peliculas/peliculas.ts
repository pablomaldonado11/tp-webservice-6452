import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from '../../services/api';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.html',
  styleUrls: ['./peliculas.css']
})
export class PeliculasComponent implements OnInit {
  listaPeliculas: any[] = [];

  constructor(
    private apiService: PeliculasService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas(): void {
    this.apiService.getTopPeliculas().subscribe({
      next: (data: any) => {
        console.log('¡API conectada y recibida con éxito!');
        
        if (data && Array.isArray(data)) {
          this.listaPeliculas = data.slice(0, 12);
        } else {
          this.listaPeliculas = [];
        }
        
        // Avisamos al HTML que refresque los datos de las tarjetas de una
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al procesar la petición:', err);
        this.cdr.detectChanges();
      }
    });
  }
}