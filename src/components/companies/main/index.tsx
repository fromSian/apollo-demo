import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import DefaultFilterPanel from "./default-filter-panel";
import MoreFiltersPanel from "./more-filters-panel";
import OperateBar from "./operate-bar";
import TablePanel from "./table-panel";
const Main = () => {
  const showMoreFilter = useCompaniesUI((state) => state.showMoreFilter);

  return (
    <div className="main-wrap w-full flex flex-col">
      <OperateBar />
      <div className="sub-wrap w-full relative">
        <div
          className={twMerge(
            "w-full h-full flex absolute top-0 left-0 transition-all",
            showMoreFilter
              ? "-translate-x-full scale-x-0"
              : "z-10 translate-x-0 scale-x-100"
          )}
        >
          <DefaultFilterPanel />
          <TablePanel />
        </div>
        {showMoreFilter && <MoreFiltersPanel />}
      </div>
    </div>
  );
};

export default Main;
