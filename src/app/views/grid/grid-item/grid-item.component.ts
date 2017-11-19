import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../model/panono';
import { StorageService } from '../../../services/storage-service';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

  @Input()
  item: Item;

  isFavorite = false;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.storage()
      .map(storage => Object.keys(storage).includes(this.item.id))
      .subscribe(data => this.isFavorite = data);
  }

  getLabel(): string {
    return (this.isFavorite) ? 'Favorite' : 'Add';
  }

  getThumbnailUrl(): string {
    return this.item.data.images.thumbnails[0].url;
  }

  addRemoveToFavs() {
    if (this.isFavorite) {
      this.storageService.remove(this.item);
    } else {
      this.storageService.add(this.item);
    }
  }

}
