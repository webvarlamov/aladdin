import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input()
  public userShowMore = true;
  @Input()
  public usePagination = true;
  @Input()
  public totalPages: number = 0;
  @Input()
  public currentPage: number = 0;
  @Output()
  public onChangePageEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public getPagesButtons(): Page[] {
    let pagesNumbers: number[] = [];

    if (this.totalPages <= 5) {
      pagesNumbers = Array.from({length: this.totalPages}, (v, k) => k)
    } else {
      if (this.currentPage >= 0 && this.currentPage < 2) {
        pagesNumbers = Array.from({length: 5}, (v, k) => k)
      } else if (this.currentPage >= 2 && this.currentPage < this.totalPages - 2) {
        pagesNumbers = Array.from({length: 5}, (v, k) => k + (this.currentPage - 2))
      } else if (this.currentPage >= this.totalPages - 2) {
        pagesNumbers = Array.from({length: 5}, (v, k) => k + this.totalPages - 5)
      }
    }

    return pagesNumbers.map(number => {
      return {
        label: (number + 1).toString(),
        number,
        link: "some",
        isActive: number == this.currentPage
      }
    });
  }

  public onPageClick(page: Page) {
    this.onChangePageEvent.emit(page.number);
  }

  public onNextPageClick() {
    this.onChangePageEvent.emit(this.currentPage + 1);
  }

  public onPrevPageClick() {
    this.onChangePageEvent.emit(this.currentPage - 1);
  }
}

interface Page {
  label: string,
  number: number;
  link: string;
  isActive: boolean
}
