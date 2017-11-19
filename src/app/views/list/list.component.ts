import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../model/panono';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  items: Item[] = [];

  constructor() { }

  ngOnInit() {
  }
}
