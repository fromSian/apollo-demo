import { Checkbox } from "@/components/ui/checkbox";
import { Row } from "@tanstack/react-table";
import React from "react";

const SelectionCell = ({ row }: { row: Row<unknown> }) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  );
};

export default SelectionCell;
