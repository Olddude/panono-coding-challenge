import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../model/panono';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  model: Item[] = [];

  constructor() { }

  ngOnInit() {
  }
}
