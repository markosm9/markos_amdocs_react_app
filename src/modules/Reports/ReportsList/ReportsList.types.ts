export interface Report {
  id: number;
  name: string;
  description: string;
  modifiedDate: string;
}

export interface ReportsDataType {
  content: Report[];
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  sort: any[];
  size: number;
  number: number;
}
