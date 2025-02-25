import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sesionActiva: boolean = false;
  tokenValue: string | null = null;

  constructor() {
    this.verificarSesion();
    //hablar con la API
  }

  verificarSesion(): void {
    // Obtener el token del localStorage
    this.tokenValue = localStorage.getItem('token');


    // Imprimir el valor en la consola
    console.log('Valor del token:', this.tokenValue);
    // Si existe un token, activar la sesión
    if (this.tokenValue) {
      this.sesionActiva = true;
      console.log('Sesión activada:', this.sesionActiva);
    }
  }


}
