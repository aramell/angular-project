import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { WatchService } from './watch.service';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DatatableComponent } from './datatable/datatable.component';
import { MatTableModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [WatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
