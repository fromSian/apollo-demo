export const countableFilterKeys = ["location"];
export const errorKeys: "error"[] = ["error"];
export const operateBarKeys: (keyof OperateBarParams)[] = ["search"];
export const defaultFilterPanelKeys: (keyof DefaultFilterParams)[] = [
  "type",
  "location",
];
export const tableFilterKeys: (keyof TableParams)[] = [
  "page",
  "size",
  "location",
  "type",
  "search",
];
export const tableMustHasOneKeys: (keyof TableParams)[] = ["location"];

export type ErrorParams = {
  error: string;
};
export type OperateBarParams = {
  search: string;
};
export type DefaultFilterParams = {
  type: string;
  location: string;
};

export type TableParams = {
  page: number;
  size: number;
  location: string;
  type: string;
  search: string;
};
