import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { GridComponent } from './views/grid/grid.component';
import { ListComponent } from './views/list/list.component';
import { ListItemComponent } from './views/list/list-item/list-item.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule, DataListModule, DataTableModule, DropdownModule, MenubarModule, MenuModule, OverlayPanelModule,
  SidebarModule,
} from 'primeng/primeng';
import { GridItemComponent } from './views/grid/grid-item/grid-item.component';
import { SharedModule } from './shared/shared.module';
import { HttpService } from './http-service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ListComponent,
    ListItemComponent,
    MenuComponent,
    GridItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedModule.forRoot(),
    DataListModule,
    DataTableModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    DropdownModule,
    OverlayPanelModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [HttpService]
})
export class AppModule { }
