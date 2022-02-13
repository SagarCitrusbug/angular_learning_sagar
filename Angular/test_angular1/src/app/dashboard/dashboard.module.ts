import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Select2Component} from 'ng2-select2';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    LoginInstructorComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    Select2Component,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
