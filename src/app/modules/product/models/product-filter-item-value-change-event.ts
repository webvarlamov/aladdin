export interface ProductFilterItemValueChangeEvent {
  filterName: string;
  filterType: string;
  multiSelectPayload?: {
    targetId: any;
    idField: string;
    checkboxValue: boolean;
  };
  singleSelectPayload?: {
    targetId: any;
    idField: string;
    radiobuttonValue: boolean;
  };
  rangeValue?: {
    min: number;
    max: number;
  }
}
