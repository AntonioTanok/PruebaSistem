import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';  // Asegúrate de que este archivo exista
import { ConsultLogsComponent } from './consult-logs/consult-logs.component';  // Asegúrate de que este archivo exista

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'consult-log', component: ConsultLogsComponent },
  { path: '', redirectTo: '/consult-log', pathMatch: 'full' }
];
