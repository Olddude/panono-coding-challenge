import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/panono';
import { HttpService } from '../../services/http-service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.items$ = this.httpService.get('http://api3-dev.panono.com/explore').map(_ => _.items);
  }
}
