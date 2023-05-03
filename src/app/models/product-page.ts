export interface ProductPage {
  products: any[],
  productFilterRepresentations: ProductFiltersRepresentations,
  pageable: any,
  sort: any,
  totalElements: number;
  totalPages: number;
}

export interface ProductFiltersRepresentations {
  [key: string]: ProductFilterRepresentation
}

export interface ProductFilterRepresentation {
  label: string;
  idField: string;
  type: Type;
  availableValues: any;
}

export enum Type {
  RANGE = 'RANGE',
  SINGLE_SELECT = 'SINGLE_SELECT',
  MULTI_SELECT = 'MULTI_SELECT'
}
