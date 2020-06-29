import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'family-information-form',
    pathMatch: 'full'
  },
  {
    path: 'family-information-form',
    loadChildren: () => import('./pages/family-information-form/family-information-form.module').then(module => module.FamilyInformationFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
