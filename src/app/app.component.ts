import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { PanonoApp } from './model/panono';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  content$: Observable<PanonoApp>;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.content$ = this.fetchRoot('http://api3-dev.panono.com/explore');
  }

  private fetchRoot(url: string): Observable<any> {
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }
}
