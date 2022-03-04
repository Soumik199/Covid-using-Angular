import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyNav/navbar/navbar.component';
import { CarsoulComponent } from './MyCarsoul/carsoul/carsoul.component';
import { SectionComponent } from './Body/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsoulComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
