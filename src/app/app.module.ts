import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdgsComponent } from './idgs/idgs.component';
import { IevnComponent } from './ievn/ievbn.component';
import { IrdComponent } from './idgs/ird/ird.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './idgs/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasComponent } from './idgs/formularios/operas-bas/operas-bas.component';
import { OperasModule } from './idgs/formularios/operas/operas.module';



@NgModule({
  declarations: [
    AppComponent,
    IdgsComponent,
    IevnComponent,
    IrdComponent,
    SumaComponent,
    OperasBasComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
