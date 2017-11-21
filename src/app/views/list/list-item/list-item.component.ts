import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../model/panono';
import { StorageService } from '../../../services/storage-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  item: Item;

  @Input()
  index: number;

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

  addRemoveToFavs() {
    if (this.isFavorite) {
      this.storageService.remove(this.item);
    } else {
      this.storageService.add(this.item);
    }
  }

  isEven() {
    return this.index % 2 === 0;
  }
}
