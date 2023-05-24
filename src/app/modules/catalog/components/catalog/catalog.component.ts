import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../../../../service/http/http-client.service";
import {
  BehaviorSubject,
  combineLatest,
  concatMap,
  debounceTime,
  filter,
  Observable,
  of,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  timer
} from "rxjs";
import {Category} from "../../../../models/category";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public $categoriesTree: Observable<Category[]>;
  public $selectedParentCategory: BehaviorSubject<Category> = new BehaviorSubject<Category>(null);
  public $selectedChildCategory: BehaviorSubject<Category> = new BehaviorSubject<Category>(null);

  public $mouseEnterEvent: BehaviorSubject<CategoryMouseEvent> = new BehaviorSubject<CategoryMouseEvent>(null);
  public $mouseLeaveEvent: BehaviorSubject<CategoryMouseEvent> = new BehaviorSubject<CategoryMouseEvent>(null);

  constructor(private httpClientService: HttpClientService) {
    this.$categoriesTree = this.httpClientService.getCategoriesTree().pipe(
      tap(categories => this.$selectedParentCategory.next(categories[0]))
    );
  }

  ngOnInit(): void {
    this.$mouseEnterEvent.pipe(
      filter(event => event?.category != null),
      tap(event => {
        this.$selectedParentCategory.next(event.category)
      })
    ).subscribe(console.log);
  }

  public onMouseEnter(category: Category, mouseEvent: MouseEvent) {
    this.$mouseEnterEvent.next({category, mouseEvent});
  }

  public onMouseLeave(category: Category, mouseEvent: MouseEvent) {
    this.$mouseLeaveEvent.next({category, mouseEvent});
  }
}

interface CategoryMouseEvent {
  category: Category;
  mouseEvent: MouseEvent;
}
