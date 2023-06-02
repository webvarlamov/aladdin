import {Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom} from "rxjs";
import {Category} from "../../../models/category";
import {HttpClientService} from "../../../service/http/http-client.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  public $categoriesTree: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  public $categoriesList: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  public $selectedParentCategory: BehaviorSubject<Category> = new BehaviorSubject<Category>(null);

  constructor(
    private httpClientService: HttpClientService,
  ) {
  }

  init(): Promise<Awaited<void>[]> {
    return Promise.all([this.loadAndSetTree(), this.loadAndSetList()])
  }

  private loadAndSetTree(): Promise<void> {
    return firstValueFrom(this.httpClientService.getCategoriesTree()).then(categoriesTree => {
      this.$categoriesTree.next(categoriesTree);
      this.$selectedParentCategory.next(categoriesTree[0])
    })
  }

  private loadAndSetList(): Promise<void>  {
    return firstValueFrom(this.httpClientService.getCategoriesList()).then(categoriesList => {
      this.$categoriesList.next(categoriesList);
    })
  }

  public setSelectedParentCategory(category: Category) {
    this.$selectedParentCategory.next(category);
  }

  public getCategoryNameByCategoryPath(path: string): string {
    return this.$categoriesList.getValue().find(category => category.path == path)?.name
  }
}
