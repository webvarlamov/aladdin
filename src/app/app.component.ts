import {Component} from '@angular/core';
import {CatalogService} from "./modules/catalog/service/catalog.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ height: 0, opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('initial <=> expanded', animate('0.2s ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  public title: string = 'aladdin';
  public ready: boolean = false;
  public state: string = 'initial';
  public isExpanded: boolean = false;

  constructor(private catalogService: CatalogService) {
    catalogService.init().then(() => {
      this.ready = true;
    });
  }

  public expand() {
    this.isExpanded = !this.isExpanded
    this.state = this.isExpanded ? 'expanded' : 'initial'
  }

  public afterRouterLinkClick() {
  }
}
