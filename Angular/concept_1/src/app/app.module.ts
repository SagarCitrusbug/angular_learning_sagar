import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsdInrPipe } from './pipeLine/usd-inr.pipe';
import { RefElDirective } from './directives/ref-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsdInrPipe,
    RefElDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
