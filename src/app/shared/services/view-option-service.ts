import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ViewOptionService {

  private optionsSubject = new BehaviorSubject<string>('Grid');

  constructor() {
  }

  view(): Observable<string> {
    return this.optionsSubject.asObservable();
  }

  selectView(view: string) {
    this.optionsSubject.next(view);
  }
}
