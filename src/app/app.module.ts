import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { GridComponent } from './views/grid/grid.component';
import { ListComponent } from './views/list/list.component';
import { ButtonModule } from 'primeng/primeng';
import { ItemComponent } from './views/list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
