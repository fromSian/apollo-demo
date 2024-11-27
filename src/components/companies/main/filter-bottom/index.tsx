import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import { UpdateFilters } from "../../hooks/useFilter";
import { countableFilterKeys } from "../config";

const FilterBottom = ({
  filterLength,
  updateFilters,
}: {
  filterLength: number;
  updateFilters: UpdateFilters;
}) => {
  const toggleShowMoreFilter = useCompaniesUI(
    (state) => state.toggleShowMoreFilter
  );

  const clearFilters = useCallback(() => {
    if (!filterLength) {
      return;
    }
    updateFilters({
      removeKeys: countableFilterKeys,
    });
  }, [filterLength]);

  return (
    <div className="flex items-center gap-4 h-full w-full max-w-[var(--filter-side-default-expand)] justify-center">
      <button
        onClick={clearFilters}
        className={twMerge(
          "text-button flex gap-1 items-center",
          filterLength ? "" : "cursor-not-allowed text-heavy_gray"
        )}
        disabled={!filterLength}
      >
        Clear Filter
        {filterLength ? <p className="number text-xs">{filterLength}</p> : ""}
      </button>
      <button className="border-button" onClick={toggleShowMoreFilter}>
        More Filter
      </button>
    </div>
  );
};

export default FilterBottom;
