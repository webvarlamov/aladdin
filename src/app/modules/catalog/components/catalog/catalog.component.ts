import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
import {CatalogService} from "../../service/catalog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  @Output()
  public afterRouterLinkClickEvent: EventEmitter<void> = new EventEmitter<void>();

  public $mouseEnterEvent: BehaviorSubject<CategoryMouseEvent> = new BehaviorSubject<CategoryMouseEvent>(null);
  public $mouseLeaveEvent: BehaviorSubject<CategoryMouseEvent> = new BehaviorSubject<CategoryMouseEvent>(null);

  constructor(
    public catalogService: CatalogService,
    public router: Router
  ) {
  }

  public ngOnInit(): void {
    this.$mouseEnterEvent.pipe(
      filter(event => event?.category != null),
      tap(event => {
        this.catalogService.setSelectedParentCategory(event.category)
      })
    ).subscribe();
  }

  public onMouseEnter(category: Category, mouseEvent: MouseEvent) {
    this.$mouseEnterEvent.next({category, mouseEvent});
  }

  public onMouseLeave(category: Category, mouseEvent: MouseEvent) {
    this.$mouseLeaveEvent.next({category, mouseEvent});
  }

  public onRouterLinkClick(category: Category) {
    this.router.navigate(['category/' + category.path]).then(event => {
      console.log(event)
      this.afterRouterLinkClickEvent.emit()
    })
  }
}

interface CategoryMouseEvent {
  category: Category;
  mouseEvent: MouseEvent;
}
