import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {
  @Input()
  public category: any

  constructor() { }

  ngOnInit(): void {
  }

}
