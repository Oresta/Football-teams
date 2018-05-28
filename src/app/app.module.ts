import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { CountryComponent } from './country/country.component';

import { CountryService } from './country.service';
import { TeamService } from './team.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TeamService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
