import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FamilyInformationFormComponent } from './family-information-form.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyInformationFormComponent
  }
]

@NgModule({
  declarations: [
    FamilyInformationFormComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FamilyInformationFormModule { }
