import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignUpComponent } from '../app/user-sign-up/user-sign-up.component'
const routes:Routes = [
  {component: UserSignUpComponent, path: 'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
