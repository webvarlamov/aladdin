import {FilterExpression} from "../service/http/model/filter-expression";
import {Page} from "../service/http/model/page";

export class ProductListPageRequest {
  public page: Page = new Page({});
  public filterExpression: FilterExpression = FilterExpression.empty()
  public categoryPath: string;
}
