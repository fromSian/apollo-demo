import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSearchParamsFilterPartial } from "../hooks/useFilter";
import {
  countableFilterKeys,
  defaultFilterPanelKeys,
  DefaultFilterParams,
  errorKeys,
  ErrorParams,
  operateBarKeys,
  OperateBarParams,
  tableFilterKeys,
  tableMustHasOneKeys,
  TableParams,
} from "./config";
import DefaultFilterPanel from "./default-filter-panel";
import MoreFiltersPanel from "./more-filters-panel";
import OperateBar from "./operate-bar";
import Error from "./status/error";
import TablePanel from "./table-panel";

const Main = () => {
  const showMoreFilter = useCompaniesUI((state) => state.showMoreFilter);

  const { getParsedFilters, updateFilters } = useSearchParamsFilterPartial();

  const {
    params: { error },
  } = getParsedFilters(errorKeys);

  const operateBarParamsConfig =
    getParsedFilters<OperateBarParams>(operateBarKeys);
  const defaultFilterPanelParamsConfig = getParsedFilters<DefaultFilterParams>(
    defaultFilterPanelKeys
  );
  const tableParamsConfig = getParsedFilters<TableParams>(
    tableFilterKeys,
    tableMustHasOneKeys
  );

  const { params: countableFilters } = getParsedFilters(countableFilterKeys);

  const filterLength = useMemo(
    () => Object.keys(countableFilters).length,
    [countableFilters]
  );
  return (
    <div className="main-wrap w-full flex flex-col">
      {error ? (
        <Error />
      ) : (
        <>
          <OperateBar
            operateBarParamsConfig={operateBarParamsConfig}
            updateFilters={updateFilters}
            filterLength={filterLength}
          />
          <div className="sub-wrap w-full relative">
            <div
              className={twMerge(
                "w-full h-full flex absolute top-0 left-0 transition-all",
                showMoreFilter
                  ? "-translate-x-full scale-x-0"
                  : "z-10 translate-x-0 scale-x-100"
              )}
            >
              <DefaultFilterPanel
                defaultFilterPanelParamsConfig={defaultFilterPanelParamsConfig}
                filterLength={filterLength}
                updateFilters={updateFilters}
              />
              <TablePanel
                tableParamsConfig={tableParamsConfig}
                updateFilters={updateFilters}
              />
            </div>
            {showMoreFilter && (
              <MoreFiltersPanel
                updateFilters={updateFilters}
                filterLength={filterLength}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
