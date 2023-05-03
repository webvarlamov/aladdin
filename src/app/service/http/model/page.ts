export class Page {
  public sort: any[] = [];
  public page: number = 0;
  public size: number = 50;

  constructor(page?: {
    sort?: any[],
    page?: number,
    size?: number
  }) {
    this.sort = page?.sort ? page.sort : [];
    this.page = page?.page ? page.page : 0
    this.size = page?.size ? page.size : 50;
  }
}
