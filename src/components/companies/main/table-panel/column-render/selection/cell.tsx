import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const SelectionCell = ({ row }) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  );
};

export default SelectionCell;
