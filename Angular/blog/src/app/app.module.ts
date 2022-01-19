import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';

// import module.
import {UserAuthModule} from './user-auth/user-auth.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    CategoryListComponent,
    SubCategoryListComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule  // define here above import module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
