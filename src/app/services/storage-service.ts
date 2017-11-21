import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../model/panono';

@Injectable()
export class StorageService {

  storageSubject = new BehaviorSubject<Storage>(window.localStorage);

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
}
