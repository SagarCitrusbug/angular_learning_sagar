import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component'
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {SignupInstructorComponent} from './signup-instructor/signup-instructor.component'
import {LoginInstructorComponent} from './login-instructor/login-instructor.component'
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup-instructor',
    component: SignupInstructorComponent
  },
  {
    path: 'login-instructor',
    component: LoginInstructorComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
