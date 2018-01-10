import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http-service';

@Injectable()
export class UrlService {

  private urlSubject: BehaviorSubject<string> = new BehaviorSubject('https://api3-dev.panono.com/explore');

  constructor() {
  }

  url(): Observable<string> {
    return this.urlSubject.asObservable();
  }

  change(nextUrl: string) {
    this.urlSubject.next(nextUrl);
  }
}
