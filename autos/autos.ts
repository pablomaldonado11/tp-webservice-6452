import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosService } from '../../services/api-autos';

declare var bootstrap: any;

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.html',
  styleUrls: ['./autos.css']
})
export class AutosComponent implements OnInit {
  allMakes: any[] = [];
  filteredMakes: any[] = [];
  models: any[] = [];
  
  selectedMake: any = null;
  isLoadingModels: boolean = false;

  constructor(
    private apiService: AutosService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerMarcas();
  }

  obtenerMarcas(): void {
    this.apiService.getMarcasAutos().subscribe({
      next: (data: any) => {
        const marcasExtraidas = Array.isArray(data) ? data : (data?.data || []);
        this.allMakes = marcasExtraidas;
        this.filteredMakes = marcasExtraidas;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  onSearch(event: any): void {
    const query = event.target.value.toLowerCase().trim();
    if (!query) {
      this.filteredMakes = this.allMakes;
    } else {
      this.filteredMakes = this.allMakes.filter(make => {
        const nombre = typeof make === 'object' && make !== null ? (make.name || '') : make;
        return String(nombre).toLowerCase().includes(query);
      });
    }
    this.cdr.detectChanges();
  }

  openMakeModal(make: any): void {
    this.selectedMake = make;
    this.models = [];
    this.isLoadingModels = true;
    this.cdr.detectChanges();

    const modalElement = document.getElementById('modelsModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    }

    let idMarca = '';
    if (typeof make === 'object' && make !== null) {
      idMarca = make.id || make.name || '';
    } else {
      idMarca = String(make);
    }

    this.apiService.ModelosPorMarca(idMarca.toLowerCase().trim()).subscribe({
      next: (data: any) => {
        const modelosExtraidos = Array.isArray(data) ? data : (data?.data || []);
        
        this.models = modelosExtraidos.map((m: any) => {
          if (typeof m === 'object' && m !== null) {
            return m.name || m.model || Object.values(m)[0] || JSON.stringify(m);
          }
          return m;
        });
        
        this.isLoadingModels = false;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error(err);
        this.isLoadingModels = false;
        this.cdr.detectChanges();
      }
    });
  }
}