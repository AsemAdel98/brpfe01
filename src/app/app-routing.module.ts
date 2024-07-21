import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () => import('./modules/main-module/registration/registration.module').then(b => b.RegistrationModule),
  },
  { path: '', redirectTo: 'registration', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
