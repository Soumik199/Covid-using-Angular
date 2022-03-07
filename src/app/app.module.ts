import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyNav/navbar/navbar.component';
import { CarsoulComponent } from './MyCarsoul/carsoul/carsoul.component';
import { SectionComponent } from './Body/section/section.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { CaseComponent } from './case/case.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TabledataComponent } from './tabledata/tabledata.component';
import { CarddocComponent } from './carddoc/carddoc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsoulComponent,
    SectionComponent,
    FormComponent,
    FooterComponent,
    CaseComponent,
    VaccineComponent,
    HomeComponent,
    TabledataComponent,
    CarddocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
