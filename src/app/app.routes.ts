import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';  // Asegúrate de que este archivo exista
import { ConsultLogsComponent } from './consult-logs/consult-logs.component';  // Asegúrate de que este archivo exista
import { LoginComponent } from './login/login.component';



export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'consult-log', component: ConsultLogsComponent },
  { path: '', redirectTo: '/consult-log', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];



