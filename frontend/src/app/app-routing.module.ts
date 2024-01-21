import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionComponent } from './intervention/intervention.component';


const routes: Routes = [
  { path: 'interventions', component: InterventionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
