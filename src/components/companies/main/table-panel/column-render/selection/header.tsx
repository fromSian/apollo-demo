import { Checkbox } from "@/components/ui/checkbox";
import { Table } from "@tanstack/react-table";
import React from "react";

const SelectionHeader = ({ table }: { table: Table<unknown> }) => {
  return (
    <div>
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    </div>
  );
};

export default SelectionHeader;
