import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../app/user/user.component';
// import { LandingComponent } from '../app/landing/landing.component';



const routes: Routes = [
  // {path:"", component:LandingComponent},
  {path:"user", component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
