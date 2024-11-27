import { ColumnDef } from "@tanstack/react-table";
import ActionsCell from "./column-render/actions";
import AddHeader from "./column-render/add";
import NameCell from "./column-render/name";
import SelectionCell from "./column-render/selection/cell";
import SelectionHeader from "./column-render/selection/header";

export const columns: ColumnDef<unknown>[] = [
  {
    id: "select",
    accessorKey: "select",
    header: SelectionHeader,
    cell: SelectionCell,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: NameCell,
  },
  {
    accessorKey: "id",
    header: "Id",
    size: 400,
  },
  {
    accessorKey: "email",
    header: "Actions",
    cell: ActionsCell,
    size: 200,
  },
  {
    accessorKey: "status",
    header: "Numbers",
    size: 200,
  },
  {
    accessorKey: "amount",
    header: "Keywords",
    size: 100,
  },
  {
    accessorKey: "add",
    header: AddHeader,
    size: 20,
  },
];
