import { ScrollArea } from "@/components/ui/scroll-area";
import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ParamsConfig, UpdateFilters } from "../../hooks/useFilter";
import { DefaultFilterParams } from "../config";
import FilterBottom from "../filter-bottom";
import List from "./list";
import Quick from "./quick";

const DefaultFilterPanel = ({
  defaultFilterPanelParamsConfig,
  filterLength,
  updateFilters,
}: {
  defaultFilterPanelParamsConfig: ParamsConfig<DefaultFilterParams>;
  filterLength: number;
  updateFilters: UpdateFilters;
}) => {
  const showfilterSide = useCompaniesUI((state) => state.showfilterSide);

  const { params } = defaultFilterPanelParamsConfig;
  const { type, ...rest } = params;

  return (
    <div
      className={twMerge(
        "flex flex-col transition-transform",
        !showfilterSide
          ? "filter-side-fold -translate-x-full scale-x-0 h-0 opacity-0 w-0 border-none"
          : "filter-side-expand translate-x-0 scale-x-100 h-full opacity-100 border-r"
      )}
    >
      <div className="filter-default-top px-3 py-2">
        <Quick type={type} updateFilters={updateFilters} />
      </div>
      <ScrollArea
        type="always"
        className="filter-default-middle border-y overflow-y-auto"
      >
        <List params={rest} updateFilters={updateFilters} />
      </ScrollArea>
      <div className="bottom">
        <FilterBottom
          filterLength={filterLength}
          updateFilters={updateFilters}
        />
      </div>
    </div>
  );
};

export default DefaultFilterPanel;
