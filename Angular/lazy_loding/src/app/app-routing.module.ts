import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', 
    loadChildren: ()=>import('./admin-auth/admin-auth.module').then(mod=> mod.AdminAuthModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-auth/user-auth.module').then(mod=> mod.UserAuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
