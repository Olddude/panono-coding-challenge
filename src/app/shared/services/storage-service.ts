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
  }

  add(item: Item) {
    window.localStorage.setItem(item.id, JSON.stringify(item));
    this.storageSubject.next(window.localStorage);
  }

  remove(item: Item) {
    window.localStorage.removeItem(item.id);
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
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
      // TODO validate if item is suitable
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }
}
