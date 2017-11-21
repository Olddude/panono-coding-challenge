import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ViewOptionService } from '../services/view-option-service';
import { FilterOptionService } from '../services/filter-option-service';
import { Subscription } from 'rxjs/Subscription';

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

  selectedView: string;

  filterOptions: SelectItem[] = [
    { label: 'All', value: 'All' },
    { label: 'Favorites', value: 'Favorites' }
  ];

  selectedFilter: string;

  constructor(private viewOptionService: ViewOptionService,
              private filterOptionService: FilterOptionService) { }

  ngOnInit() {
    this.viewOptionService
      .view()
      .subscribe(viewOption => this.selectedView = viewOption);

    this.filterOptionService
      .filter()
      .subscribe(filterOption => this.selectedFilter = filterOption);
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  selectView() {
    this.viewOptionService.selectView(this.selectedView);
  }

  selectFilter() {
    console.log(this.selectedFilter);
    this.filterOptionService.selectFilter(this.selectedFilter);
  }
}
