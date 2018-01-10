import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/if';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/combineLatest';
import { Observable } from 'rxjs/Observable';
import { Item, PanonoApp } from './model/panono';
import { ViewOptionService } from './shared/services/view-option-service';
import { FilterOptionService } from './shared/services/filter-option-service';
import { StorageService } from './shared/services/storage-service';
import { HttpService } from './shared/services/http-service';
import { UrlService } from './shared/services/url-service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  currentView: string;
  items: Item[] = [];
  nextUrl: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private urlService: UrlService,
    private httpService: HttpService,
    private filterOptionService: FilterOptionService,
    private storageService: StorageService,
    private viewOptionService: ViewOptionService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.viewOptionService.view().subscribe(_ => this.currentView = _)
    );

    const url$ = this.urlService.url();
    const panono$ = (url: string) => this.httpService.get(url);
    const filter$ = this.filterOptionService.filter();
    const storage$ = this.storageService.storage();

    this.subscriptions.push(
      url$.flatMap(url => Observable.combineLatest(panono$(url), filter$, storage$))
        .subscribe(
          ([panono, filter, storage]) => {
            this.nextUrl = panono.next;
            this.items = (filter === 'Favorites') ? this.storageService.getItemsFromStorage(storage) : panono.items;
          }
        )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(_ => _.unsubscribe());
  }

  paginate(event: any) {
    console.log(event);
    this.urlService.change(this.nextUrl);
  }
}
