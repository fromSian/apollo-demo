import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import FilterBottom from "../filter-bottom";

const DefaultFilterPanel = () => {
  const showfilterSide = useCompaniesUI((state) => state.showfilterSide);

  return (
    <div
      className={twMerge(
        "border-r flex flex-col transition-transform",
        !showfilterSide
          ? "filter-side-fold -translate-x-full scale-x-0 h-0 opacity-0"
          : "filter-side-expand translate-x-0 scale-x-100 h-full opacity-100"
      )}
    >
      <div className="filter-default-top">top</div>
      <div className="filter-default-middle border-y overflow-y-auto">
        <div className="h-[800px]">middle</div>
      </div>
      <div className="bottom">
        <FilterBottom />
      </div>
    </div>
  );
};

export default DefaultFilterPanel;
