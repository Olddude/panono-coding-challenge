import { Component, Input } from '@angular/core';
import { Item } from '../../model/panono';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  items: Item[];

  constructor() { }

  isEven(index: number) {
    return (index % 2 === 0);
  }
}
