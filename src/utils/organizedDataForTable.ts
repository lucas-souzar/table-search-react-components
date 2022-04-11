import { TableHeader } from "../components/Table/types";

type IndexedHeader = {
  [key: string]: TableHeader;
};

type OrganizedItem = {
  [key: string]: any;
};

export default function organizeData(
  data: any[],
  headers: TableHeader[]
): [OrganizedItem[], IndexedHeader] {
  const indexedHeader: IndexedHeader = {};

  headers.forEach((header) => {
    indexedHeader[header.key] = {
      ...header,
    };
  });

  const headerKeysInOrder = Object.keys(indexedHeader);

  const organizedData = data.map((item) => {
    const organizedItem: OrganizedItem = {};

    headerKeysInOrder.forEach((key) => {
      organizedItem[key] = item[key];
    });

    organizedItem.$original = item;

    return organizedItem;
  });

  return [organizedData, indexedHeader];
}
