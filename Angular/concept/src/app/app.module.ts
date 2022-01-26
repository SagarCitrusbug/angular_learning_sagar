import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
// Import Material button module
import {MatButtonModule} from '@angular/material/button'
// Import Material badge module
import {MatBadgeModule} from '@angular/material/badge';
import { ChildComponent } from './child/child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    ChildToParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// install bootstrap in project using below commend
// ng add @ng-bootstrap/ng-bootstrap

// install material ui in project using below commend
// ng add @angular/material