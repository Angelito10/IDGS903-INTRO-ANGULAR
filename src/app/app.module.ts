import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdgsComponent } from './idgs/idgs.component';
import { IevnComponent } from './ievn/ievbn.component';
import { IrdComponent } from './idgs/ird/ird.component';


@NgModule({
  declarations: [
    AppComponent,
    IdgsComponent,
    IevnComponent,
    IrdComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
