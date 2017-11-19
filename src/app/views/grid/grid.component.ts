import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../model/panono';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()
  items: Item[] = [];

  constructor() { }

  ngOnInit() {
  }

}
