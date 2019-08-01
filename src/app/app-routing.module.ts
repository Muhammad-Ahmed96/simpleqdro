import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { GeneralComponent } from './general/general.component';


const routes: Routes = [
  {
    path:'',
    component:HomeContentComponent
  },
  {
    path:'general',
    component:GeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
