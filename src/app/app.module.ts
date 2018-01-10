import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  SidebarModule, PaginatorModule
} from 'primeng/primeng';
import { GridItemComponent } from './views/grid/grid-item/grid-item.component';
import { ServicesModule } from './shared/services.module';

const routes: Routes = [
  { path: '', component: AppComponent }
];

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
    ServicesModule.forRoot(),
    RouterModule.forRoot(routes),
    DataListModule,
    DataTableModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    DropdownModule,
    OverlayPanelModule,
    PaginatorModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
