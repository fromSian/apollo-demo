import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

const FilterBottom = () => {
  const toggleShowMoreFilter = useCompaniesUI(
    (state) => state.toggleShowMoreFilter
  );

  const [filterLength, setFilterLength] = useState(10);
  const clearFilters = useCallback(() => {
    if (!filterLength) {
      return;
    }
    setFilterLength(0);
  }, []);

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
