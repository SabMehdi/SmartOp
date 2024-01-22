import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionComponent } from './intervention/intervention.component';
import { AllInterventionsComponent } from './all-interventions/all-interventions.component';


const routes: Routes = [
  { path: 'interventions', component: InterventionComponent },
  { path: 'all-interventions', component: AllInterventionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
