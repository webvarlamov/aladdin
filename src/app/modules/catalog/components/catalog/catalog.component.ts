import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../../../service/http/http-client.service";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public $categoriesTree: Observable<any>;
  public $selectedParentCategory: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  $selectedChildCategory: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private httpClientService: HttpClientService) {
    this.$categoriesTree = this.httpClientService.getCategoriesTree().pipe(
      tap(categories => this.$selectedParentCategory.next(categories[0]))
    )
  }

  ngOnInit(): void {
  }
}
