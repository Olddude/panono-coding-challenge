import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isSidebarVisible = false;

  viewOptions: SelectItem[] = [
    { label: 'Grid', value: 'Grid' },
    { label: 'List', value: 'List' }
  ];

  selectedView: SelectItem;

  filterOptions: SelectItem[] = [
    { label: 'All', value: 'All' },
    { label: 'Favorites', value: 'Favorites'}
  ];

  selectedFilter: SelectItem;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
