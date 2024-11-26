import React, { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import DefaultFilterPanel from "./default-filter-panel";
import MoreFiltersPanel from "./more-filters-panel";
import OperateBar from "./operate-bar";
import TablePanel from "./table-panel";

const Main = () => {
  const [showMoreFilter, setShowMoreFilter] = useState(true);

  const [showFilterSide, setShowFilterSide] = useState(true);

  const toggleShowFilterSide = useCallback(() => {
    setShowFilterSide((v) => !v);
  }, []);
  const toggleShowMoreFilter = useCallback(() => {
    setShowMoreFilter((v) => !v);
  }, []);

  return (
    <div className="main-wrap w-full flex flex-col">
      <OperateBar />
      <div className="sub-wrap w-full">
        <div
          className={twMerge(
            "w-full h-full flex",
            showMoreFilter ? "w-0 h-0 invisible" : "w-full h-full"
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
