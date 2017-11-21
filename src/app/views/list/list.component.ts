import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/panono';
import { HttpService } from '../../services/http-service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private httpService: HttpService) { }

  isEven(index: number) {
    return (index % 2 === 0);
  }

  ngOnInit() {
    this.items$ = this.httpService.get('http://api3-dev.panono.com/explore').map(_ => _.items);
  }
}
