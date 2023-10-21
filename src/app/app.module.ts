import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgChartsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
