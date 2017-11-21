import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilterOptionService {

  private optionSubject = new BehaviorSubject<string>('All');

  constructor() {
  }

  filter(): Observable<string> {
    return this.optionSubject.asObservable();
  }

  selectFilter(view: string) {
    this.optionSubject.next(view);
  }
}
