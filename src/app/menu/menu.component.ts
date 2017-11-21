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
export class MenuComponent implements OnInit, OnDestroy {

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

  subscriptions: Subscription[] = [];

  constructor(private viewOptionService: ViewOptionService,
              private filterOptionService: FilterOptionService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.viewOptionService
        .view()
        .subscribe(viewOption => this.selectedView = viewOption)
    );

    this.subscriptions.push(
      this.filterOptionService
        .filter()
        .subscribe(filterOption => this.selectedFilter = filterOption)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(_ => _.unsubscribe());
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  selectView() {
    this.viewOptionService.selectView(this.selectedView);
  }

  selectFilter() {
    this.filterOptionService.selectFilter(this.selectedFilter);
  }
}
