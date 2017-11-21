import { Component, Input } from '@angular/core';
import { Item } from '../../model/panono';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input()
  items: Item[];

  constructor() {
  }
}
