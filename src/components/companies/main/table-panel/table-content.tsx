import { DataTable } from "@/components/ui/data-table";
import { useCompaniesUI } from "@/stores/companies-ui";
import {
  getCoreRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { columns, data } from "./data";

const TableContent = () => {
  const tableSelectedLength = useCompaniesUI(
    (state) => state.tableSelectedLength
  );
  const setTableSelectedLength = useCompaniesUI(
    (state) => state.setTableSelectedLength
  );
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
    initialState: {
      columnPinning: {
        left: ["select", "name"],
      },
    },
  });
  useEffect(() => {
    setTableSelectedLength(Object.keys(rowSelection).length);
  }, [rowSelection]);

  useEffect(() => {
    if (!tableSelectedLength) {
      setRowSelection({});
    }
  }, [tableSelectedLength]);

  return (
    <div className="companies-table w-full overflow-auto relative">
      <DataTable columns={columns} table={table} />
    </div>
  );
};

export default TableContent;
