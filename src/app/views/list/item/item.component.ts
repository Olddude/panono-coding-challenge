import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../model/panono';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  model: Item;

  constructor() { }

  ngOnInit() {
  }

  handleClick(self) {
    //TODO add/remove item from storage
  }

  getLabel() {
    //TODO get different label based on if in storage
    return 'Add';
  }

}
