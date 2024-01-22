import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionComponent } from './intervention/intervention.component';
import { AllInterventionsComponent } from './all-interventions/all-interventions.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'interventions', component: InterventionComponent },
  { path: 'all-interventions', component: AllInterventionsComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
