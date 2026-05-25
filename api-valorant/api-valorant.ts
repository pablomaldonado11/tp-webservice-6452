import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import {
  RouterLink,
  RouterOutlet
} from '@angular/router';

import { ValorantService }
from '../../services/valorant';

@Component({
  selector: 'app-valorant',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './api-valorant.html',
  styleUrls: ['./api-valorant.css']
})

export class ValorantComponent
implements OnInit {

  partidos: any[] = [];

  paginaActual: number = 1;

  constructor(
    private valorantService:
    ValorantService
  ) {}

  ngOnInit(): void {

    this.cargarPartidos();

  }

  cargarPartidos(): void {

    this.valorantService
      .obtenerResultados(
        this.paginaActual
      )
      .subscribe({

        next: (data: any) => {

          console.log(data);

          this.partidos =
            data.data || [];

        },

        error: (err) => {

          console.error(
            'Error API:',
            err
          );

        }
      });
  }

  cambiarPagina(
    siguiente: boolean
  ): void {

    if (siguiente) {

      this.paginaActual++;

    } else if (
      this.paginaActual > 1
    ) {

      this.paginaActual--;

    }

    this.cargarPartidos();
  }
}