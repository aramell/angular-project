import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WatchService } from './watch.service';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule
  ],
  providers: [WatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
