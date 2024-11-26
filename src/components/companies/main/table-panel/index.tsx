import Loading from "@/components/common/loading";
import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSearchParamsFilterPartial } from "../../hooks/useFilter";
import { tableRelatedSearchParamsKeys } from "../../settings/table";
import Empty from "../status/empty";
import TableWrap from "./table-wrap";
/** 加request 中斷邏輯 */
const Table = () => {
  const showfilterSide = useCompaniesUI((state) => state.showfilterSide);
  const { filters } = useSearchParamsFilterPartial(
    tableRelatedSearchParamsKeys
  );
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [columnsKeys, setColumnsKeys] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Object.keys(filters)?.length) {
      /** check 默認參數 */
      setLoading(true);
      setTimeout(() => {
        setDatas([{ a: 1 }]);
        setTotal(10);
        setLoading(false);
      }, 100);
    } else {
      /** 結果清空 */
      setDatas([]);
    }
  }, [filters]);

  return (
    <div
      className={twMerge(
        "h-full",
        showfilterSide ? "companies-table-expand" : "companies-table-fold"
      )}
    >
      {loading ? (
        <Loading />
      ) : datas && datas.length ? (
        <TableWrap total={total} />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Table;
