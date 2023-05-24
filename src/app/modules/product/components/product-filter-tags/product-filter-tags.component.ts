import {Component, Input, OnInit} from '@angular/core';
import {ProductFiltersRepresentations} from "../../../../models/product-list-page";
import {ProductFiltersValues} from "../../../../service/product/product-filter-values.service";

@Component({
  selector: 'app-product-filter-tags',
  templateUrl: './product-filter-tags.component.html',
  styleUrls: ['./product-filter-tags.component.css']
})
export class ProductFilterTagsComponent implements OnInit {
  @Input()
  public productFilterRepresentations: ProductFiltersRepresentations = {};
  @Input() //TODO: импортируется из компонента фильтра.
  public productFilterValues: ProductFiltersValues = {}

  constructor() { }

  ngOnInit(): void {
  }

}
