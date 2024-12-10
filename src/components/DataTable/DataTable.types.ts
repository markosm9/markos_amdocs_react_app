export type DataTableColumn<T extends object> = {
  header: string;
  accessor: keyof T | string;
  value?: (value: T, item: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
};

export interface DataTableProps<T extends object> {
  data: T[];
  columns: DataTableColumn<T>[];
}
