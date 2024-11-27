import { ScrollArea } from "@/components/ui/scroll-area";
import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSearchParamsFilterPartial } from "../../hooks/useFilter";
import FilterBottom from "../filter-bottom";

const DefaultFilterPanel = () => {
  const showfilterSide = useCompaniesUI((state) => state.showfilterSide);

  const { params, updateFilters } = useSearchParamsFilterPartial(["a", "b"]);

  return (
    <div
      className={twMerge(
        "flex flex-col transition-transform",
        !showfilterSide
          ? "filter-side-fold -translate-x-full scale-x-0 h-0 opacity-0 w-0 border-none"
          : "filter-side-expand translate-x-0 scale-x-100 h-full opacity-100 border-r"
      )}
    >
      <div className="filter-default-top">top</div>
      <ScrollArea
        type="always"
        className="filter-default-middle border-y overflow-y-auto"
      >
        <div className="h-[800px]">
          <button
            onClick={() => {
              updateFilters({
                updateArr: [
                  { key: "page", value: (Math.random() * 10).toFixed(0) },
                ],
                removeKeys: [],
              });
            }}
          >
            click
          </button>
          <button
            onClick={() => {
              updateFilters({
                // removeKeys: ["page"],
                updateArr: [
                  { key: "location", value: (Math.random() * 10).toFixed(0) },
                ],
              });
            }}
          >
            reset
          </button>
          {JSON.stringify(params)}
        </div>
      </ScrollArea>
      <div className="bottom">
        <FilterBottom />
      </div>
    </div>
  );
};

export default DefaultFilterPanel;
