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
  items: Item[];

  currentView$: Observable<string>;

  constructor(
    private httpService: HttpService,
    private filterOptionService: FilterOptionService,
    private storageService: StorageService,
    private viewOptionService: ViewOptionService) {
  }

  ngOnInit() {
    this.currentView$ = this.viewOptionService.view();

    const filterObs$ = (items: Item[]): Observable<Item[]> => {
      return this.filterOptionService.filter()
        .flatMap(filter => {
          if (filter === 'Favorites') {
            return storageObs$(items);
          } else {
            return Observable.of(items);
          }
        });
    };

    const storageObs$ = (items: Item[]): Observable<Item[]> => {
      return this.storageService.storage()
        .map(storage => Object.keys(storage))
        .map(favoriteIds => items.filter(item => favoriteIds.includes(item.id)));
    }

    this.items$ = this.httpService.get('http://api3-dev.panono.com/explore')
      .map(response => response.items)
      .flatMap(items => filterObs$(items));

    this.items$.subscribe(items => {
      this.items = items;
    });
  }
}
