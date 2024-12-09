import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';  // Asegúrate de que este archivo existe
import { ConsultLogsComponent } from './consult-logs/consult-logs.component';  // Asegúrate de que este archivo existe
import { routes } from './app.routes';  // Aquí importas las rutas desde app.routes.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Usamos las rutas definidas en app.routes.ts
  exports: [RouterModule]
})
export class AppRoutingModule {}
