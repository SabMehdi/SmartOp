import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterventionComponent } from './intervention/intervention.component';
import { HttpClientModule } from '@angular/common/http';
import { AllInterventionsComponent } from './all-interventions/all-interventions.component';

@NgModule({
  declarations: [
    AppComponent,
    InterventionComponent,
    AllInterventionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
