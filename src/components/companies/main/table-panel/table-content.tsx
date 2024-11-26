import { DataTable } from "@/components/ui/data-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { columns, data } from "./data";

const TableContent = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    initialState: {
      columnPinning: {
        left: ["select", "name"],
      },
    },
  });
  return (
    <div className="companies-table w-full overflow-auto relative">
      <DataTable columns={columns} table={table} />
    </div>
  );
};

export default TableContent;
