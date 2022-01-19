import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';



@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegistrarComponent
  ]
})
export class UserAuthModule { }
