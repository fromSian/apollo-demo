import Loading from "@/components/common/loading";
import { useCompaniesUI } from "@/stores/companies-ui";
import React, { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { v4 as uuid } from "uuid";
import { ParamsConfig, UpdateFilters } from "../../hooks/useFilter";
import { TableParams } from "../config";
import Empty from "../status/empty";
import Initial from "../status/initial";
import TableWrap from "./table-wrap";

/** 加request 中斷邏輯 */

type TableProps = {
  tableParamsConfig: ParamsConfig<TableParams>;
  updateFilters: UpdateFilters;
};

const Table = memo(({ tableParamsConfig, updateFilters }: TableProps) => {
  const { isFilled, params } = tableParamsConfig;
  const showfilterSide = useCompaniesUI((state) => state.showfilterSide);

  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState<unknown[]>([]);
  const [columnsKeys, setColumnsKeys] = useState([]);

  const [total, setTotal] = useState(10);

  useEffect(() => {
    /** todo 驗證篩選字段是否有值 */
    console.log(isFilled, params);
    if (isFilled && params) {
      setLoading(true);
      setTimeout(() => {
        setDatas(
          Array.from({ length: +params.size || 25 }).map((_, index) => ({
            id: uuid(),
            amount: 100 + index,
            status: "pending",
            email: "m@example.com",
            name: "f",
            address: "address",
          }))
        );
        setTotal(Math.floor(Math.random() * 1000));
        setLoading(false);
      }, 500);
    } else {
      setDatas([]);
      setTotal(0);
    }
  }, [params, isFilled]);

  return (
    <div
      className={twMerge(
        "h-full",
        showfilterSide ? "companies-table-expand" : "companies-table-fold"
      )}
    >
      {!isFilled ? (
        <Initial />
      ) : loading ? (
        <Loading />
      ) : datas && datas.length ? (
        <TableWrap
          total={total}
          datas={datas}
          updateFilters={updateFilters}
          params={params}
        />
      ) : (
        <Empty />
      )}
    </div>
  );
});

export default Table;
