import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private static PAGE_PARAM_NAME = 'page';
  public totalPages: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public totalElements: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  public updateByEvent(page: number) {
    const queryParams = {
      page
    };

    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });

    this.location.go(urlTree.toString())
  }

  public getCurrentPage(): number {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const pageParam = urlSearchParams.get(PaginationService.PAGE_PARAM_NAME);
    return pageParam ? parseInt(pageParam, 10) : 0;
  }

  public setTotals(totalPages: number, totalElements: number ) {
    this.totalPages.next(totalPages);
    this.totalElements.next(totalElements);
  }
}
