import { ColumnDef } from "@tanstack/react-table";
import { v4 as uuid } from "uuid";
import ActionsCell from "./column-render/actions";
import AddHeader from "./column-render/add";
import NameCell from "./column-render/name";
import SelectionCell from "./column-render/selection/cell";
import SelectionHeader from "./column-render/selection/header";
type DataProps = {
  id: "";
  name: "";
};

export const columns: ColumnDef<{}>[] = [
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
    accessorKey: "email",
    header: "Actions",
    cell: ActionsCell,
    size: 400,
  },
  {
    accessorKey: "status",
    header: "Numbers",
    size: 400,
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

export const data = Array.from({ length: 15 }).map((_, index) => ({
  id: uuid(),
  amount: 100 + index,
  status: "pending",
  email: "m@example.com",
  name: "f",
  address: "address",
}));
