import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogButtonComponent } from './catalog-button.component';

describe('CatalogButtonComponent', () => {
  let component: CatalogButtonComponent;
  let fixture: ComponentFixture<CatalogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
