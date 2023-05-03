import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppURLSearchParamsService {
  constructor() { }

  public getUrlSearchParams(): AppURLSearchParams {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const appUrlSearchParams: AppURLSearchParams = {}
    for (const [key, value] of urlSearchParams) {
      if (appUrlSearchParams.hasOwnProperty(key)) {
        appUrlSearchParams[key].push(value)
      } else {
        appUrlSearchParams[key] = [value]
      }
    }

    return appUrlSearchParams;
  }
}

export interface AppURLSearchParams {
  [key: string]: string[]
}
