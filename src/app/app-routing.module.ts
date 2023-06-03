import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CaseComponent } from './case/case.component';
import { HomeComponent } from './home/home.component';
import { PreventComponent } from './prevent/prevent.component';
import { VaccineComponent } from './vaccine/vaccine.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent //when there is no router link then we use this ..or it can be the landing page.
  },
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
  },
  {
    component:PreventComponent,
    path:'Prevention'
  },
  {
    component:BlogComponent,
    path:'Blog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
