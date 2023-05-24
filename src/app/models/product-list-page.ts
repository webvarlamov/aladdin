export interface ProductListPage {
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
  unit: string;
  label: string;
  idField: string;
  type: Type;
  availableValues: any;
  order: number;
}

export enum Type {
  RANGE = 'RANGE',
  SINGLE_SELECT = 'SINGLE_SELECT',
  MULTI_SELECT = 'MULTI_SELECT'
}

export interface Product {
  id: number;
  model: string;
  location: string;
  image: string;
  quantity: string;
  price: number;
  weight: number;
  length: number;
  width: number;
  height: number;
  viewed: number;
  description: ProductDescription;
  manufacturer: Manufacturer;
  images: ProductImage[];
}

export interface ProductDescription {
  name: string;
  description: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  image: string;
}

export interface ProductImage {
  image: string;
  sortOrder: number
}
