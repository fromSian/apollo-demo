import React from "react";
import FilterBottom from "../filter-bottom";

const MoreFiltersPanel = () => {
  return (
    <div className="w-full h-full">
      <div className="filter-more-main-height">more filters</div>
      <div className="bottom border-t">
        <FilterBottom />
      </div>
    </div>
  );
};

export default MoreFiltersPanel;
