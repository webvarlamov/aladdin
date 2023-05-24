import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesProductsService {
  private static FAVOURITES_PRODUCTS_KEY = 'FAVOURITES_PRODUCTS'

  constructor() { }

  public addToFavourites(productId: number): void {
    let favouritesProducts = this.getFavourites();
    favouritesProducts.push(productId);
    this.saveFavourites(favouritesProducts);
  }

  public removeFromFavourites(productId: number): void {
    let favouritesProducts = this.getFavourites();
    this.saveFavourites(favouritesProducts.filter(fpId => fpId != productId));
  }

  public getFavourites(): number[] {
    let favouritesProducts: number[] = [];
    let item: string = localStorage.getItem(FavouritesProductsService.FAVOURITES_PRODUCTS_KEY);
    if (item != null) {
      favouritesProducts = JSON.parse(item) as number[];
    } else {
      favouritesProducts = [];
    }
    return favouritesProducts;
  }

  public saveFavourites(favouritesProducts: number[]): void {
    localStorage.setItem(FavouritesProductsService.FAVOURITES_PRODUCTS_KEY, JSON.stringify(favouritesProducts))
  }

  public isFavorite(productId: number):boolean {
    return this.getFavourites().includes(productId);
  }
}
