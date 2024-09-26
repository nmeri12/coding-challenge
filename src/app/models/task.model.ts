export interface Tariff {
  id: number;
  name: string;
  downloadSpeed: number;
  uploadSpeed: number;
  price: number;
  benefits:string[]
}

export type SortOrder = 'asc' | 'desc';
export type SortField =  keyof Omit<Tariff, 'benefits'>;

export interface SortOptions {
  sortField: SortField
  sortOrder: SortOrder;
}

