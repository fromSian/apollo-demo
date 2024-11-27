import PlaceHolder from "@/components/common/placeholder";
import React from "react";
import { UpdateFilters } from "../../hooks/useFilter";
import FilterBottom from "../filter-bottom";

const MoreFiltersPanel = ({
  filterLength,
  updateFilters,
}: {
  filterLength: number;
  updateFilters: UpdateFilters;
}) => {
  return (
    <div className="w-full h-full">
      <div className="filter-more-main-height">
        <PlaceHolder />
      </div>
      <div className="bottom border-t">
        <FilterBottom
          filterLength={filterLength}
          updateFilters={updateFilters}
        />
      </div>
    </div>
  );
};

export default MoreFiltersPanel;
