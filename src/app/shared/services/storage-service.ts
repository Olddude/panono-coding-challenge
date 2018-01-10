import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../../model/panono';

@Injectable()
export class StorageService {

  private storageSubject = new BehaviorSubject<Storage>(window.localStorage);

  constructor() {
    if (!window.localStorage.getItem('favorite360')) {
      window.localStorage.setItem('favorite360', JSON.stringify([]));
    }
  }

  add(item: Item) {
    const items: Item[] = JSON.parse(window.localStorage.getItem('favorite360'));
    if (!items.map(_ => _.id).includes(item.id)) {
      items.push(item);
    }
    window.localStorage.setItem('favorite360', JSON.stringify(items));
    this.storageSubject.next(window.localStorage);
  }

  remove(item: Item) {
    let items: Item[] = JSON.parse(localStorage.getItem('favorite360'));
    if (items.map(_ => _.id).includes(item.id)) {
      items = items.filter(_ => _.id !== item.id);
    }
    window.localStorage.setItem('favorite360', JSON.stringify(items));
    this.storageSubject.next(window.localStorage);
  }

  clear() {
    window.localStorage.clear();
    this.storageSubject.next(window.localStorage);
  }

  storage(): Observable<Storage> {
    return this.storageSubject.asObservable();
  }

  getItemsFromStorage(storage: Storage): Item[] {
    return JSON.parse(window.localStorage.getItem('favorite360'));
  }
}
