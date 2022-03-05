import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './case/case.component';
import { HomeComponent } from './home/home.component';
import { VaccineComponent } from './vaccine/vaccine.component';


const routes: Routes = [
  {
    component:CaseComponent,
    path:'case'  // Rem. the router link in Html should have same name there
  },
  
  {
    component:VaccineComponent,
    path:'vaccine'
  },
  {
    component:HomeComponent,
    path:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
