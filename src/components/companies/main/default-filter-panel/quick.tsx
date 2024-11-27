import { NumberToReadStr } from "@/lib/format";
import React, { useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { UpdateFilters } from "../../hooks/useFilter";

const options = [
  {
    value: "total",
    label: "Total",
    count: 2498000,
  },
  {
    value: "new",
    label: "Net New",
    count: 300,
  },
  {
    value: "save",
    label: "Saved",
    count: 0,
  },
];

const Quick = ({
  type,
  updateFilters,
}: {
  type: string;
  updateFilters: UpdateFilters;
}) => {
  const handleClick = useCallback(
    (value: string) => {
      if (type === value) {
        return;
      }
      updateFilters({
        updateArr: [{ key: "type", value }],
      });
    },
    [type]
  );

  return (
    <div className="flex items-center justify-between border rounded-lg h-full p-1">
      {options.map((item) => (
        <div
          onClick={() => handleClick(item.value)}
          key={item.value}
          className={twMerge(
            "px-3 py-1 flex flex-col gap-2 justify-center items-center rounded-md cursor-pointer",
            type === item.value ? "bg-light_blue text-heavy_blue" : ""
          )}
        >
          <p>{item.label}</p>
          <p className="number text-xs">{NumberToReadStr(item.count)}</p>
        </div>
      ))}
    </div>
  );
};

export default Quick;
