import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
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

  items$: Observable<Item[]>;
  items: Item[] = [];
  filteredItems: Item[] = [];

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
        this.items = items;
      });

    const filterObs$ = (): Observable<Item[]> => {
      return this.filterOptionService.filter()
        .flatMap(filter => {
          if (filter === 'Favorites') {
            return storageObs$();
          } else {
            return Observable.of(this.items);
          }
        });
    };

    const storageObs$ = (): Observable<Item[]> => {
      return this.storageService.storage()
        .map(storage => {
          const keys = Object.keys(storage);
          console.log(keys);
          return keys;
        })
        .map(favoriteIds => {
          console.log('items', this.items);
          console.log('favIds', favoriteIds);
          const _ = this.items.filter(item => favoriteIds.includes(item.id));
          console.log(_);
          return _;
        });
    }

    filterObs$()
      .subscribe(_ => {
        console.log(_);
        this.filteredItems = _;
      });
  }
}
