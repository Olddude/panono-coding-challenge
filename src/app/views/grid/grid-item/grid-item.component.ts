import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../../../model/panono';
import { StorageService } from '../../../shared/services/storage-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit, OnDestroy {

  @Input()
  item: Item;

  label: string;
  isFavorite: boolean;
  isFavoriteSubscription: Subscription;

  thumbnailUrl: string;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.isFavoriteSubscription = this.storageService.storage()
      .map(storage => this.storageService.getItemsFromStorage(storage).map(_ => _.id).includes(this.item.id))
      .subscribe(data => {
        this.isFavorite = data;
        this.label = (data) ? '- Favorite' : '+ Add';
      });
    this.thumbnailUrl = this.item.data.images.thumbnails[0].url;
  }

  ngOnDestroy() {
    this.isFavoriteSubscription.unsubscribe();
  }

  addRemoveToFavs() {
    (this.isFavorite)
      ? this.storageService.remove(this.item)
      : this.storageService.add(this.item);
  }
}
