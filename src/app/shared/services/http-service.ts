
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  get(url: string): Observable<any> {
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }
}
