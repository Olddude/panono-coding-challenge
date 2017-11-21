import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ViewOptionService } from './services/view-option-service';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './services/http-service';
import { FilterOptionService } from './services/filter-option-service';
import { Item } from './model/panono';
import { StorageService } from './services/storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: Item[] = [];

  currentView$: Observable<string>;

  constructor(
    private httpService: HttpService,
    private filterOptionService: FilterOptionService,
    private storageService: StorageService,
    private viewOptionService: ViewOptionService) {
  }

  ngOnInit() {
    this.currentView$ = this.viewOptionService.view();

    this.httpService.get('http://api3-dev.panono.com/explore')
      .map(response => response.items)
      .subscribe(items => {
          this.filterOptionService.filter()
            .subscribe(filter => {
              if (filter === 'Favorites') {
                this.storageService.storage()
                  .map(storage => Object.keys(storage))
                  .subscribe(favoriteIds => {
                      this.items = this.items.filter(item => favoriteIds.includes(item.id));
                  });
              } else {
                this.items = items;
              }
            });
        });
  }
}
