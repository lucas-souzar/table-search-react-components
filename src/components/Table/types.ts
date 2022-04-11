export interface TableHeader {
  key: string;
  value: string;
  center?: boolean;
}

export interface TableProps {
  headers: TableHeader[];
  data: any[];

  enableActions?: boolean;

  onDetail?: (item: any) => void;
  onEdit?: (item: any) => void;
  onChangeStatus?: (item: any) => void;
}
