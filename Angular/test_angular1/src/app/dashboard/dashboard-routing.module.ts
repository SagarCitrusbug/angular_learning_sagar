import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './index/index.component'
import {LoginComponent} from './login/login.component'
import {LoginInstructorComponent} from './login-instructor/login-instructor.component'
import {SignupComponent} from './signup/signup.component'
  
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-instructor',
    component: LoginInstructorComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
