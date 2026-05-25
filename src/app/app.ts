import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// 1. CORREGIMOS LA RUTA: Apunta a 'navbar' en vez de 'header'
import { NavbarComponent } from './components/navbar/navbar'; 
// 2. IMPORTAMOS EL FOOTER (Aseguramos que coincida con el nombre que declaraste adentro)
import { FooterComponent } from './components/footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    NavbarComponent, 
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'tp-webservice';
}