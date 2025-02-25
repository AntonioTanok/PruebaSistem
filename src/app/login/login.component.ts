import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule] // Importamos ReactiveFormsModule
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  iniciarSesion() {
    console.log("Datos del formulario:", this.loginForm.value);

    if (this.loginForm.invalid) {
      console.error('Formulario inválido');
      return;
    }

    const loginData = this.loginForm.value;

    this.http.post<{ token: string }>('http://localhost:8000/login', loginData).subscribe({
      next: (response) => {
        console.log('Respuesta recibida:', response);

        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token almacenado en localStorage:', response.token);
          // Recargar la página después de un inicio de sesión exitoso
          location.reload();

        } else {
          console.warn('No se recibió un token en la respuesta.');
        }
      },
      error: (error) => {
        console.error('Error en la solicitud:', error);
      }
    });
  }
}
