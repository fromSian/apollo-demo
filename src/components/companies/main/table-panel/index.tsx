import Loading from "@/components/common/loading";
import { useCompaniesUI } from "@/stores/companies-ui";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSearchParamsFilterPartial } from "../../hooks/useFilter";
import { tableRelatedSearchParamsKeys } from "../../settings/table";
import Empty from "../status/empty";
import { data } from "./data";
import TableWrap from "./table-wrap";

export type Params = {
  location: string;
  page: number;
  size: number;
};
/** 加request 中斷邏輯 */

const Table = () => {
  const showfilterSide = useCompaniesUI((state) => state.showfilterSide);
  const { params, updateFilters, isFilled } =
    useSearchParamsFilterPartial<Params>(
      ["location", "page", "size"],
      ["location"]
    );
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [columnsKeys, setColumnsKeys] = useState([]);

  const [total, setTotal] = useState(10);

  useEffect(() => {
    /** todo 驗證篩選字段是否有值 */
    console.log(isFilled, params);
    if (isFilled && params) {
      setLoading(true);
      setTimeout(() => {
        setDatas(data);
        setLoading(false);
      }, 200);
    } else {
      setDatas([]);
    }
  }, [params, isFilled]);
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
        <TableWrap
          total={total}
          updateFilters={updateFilters}
          params={params}
        />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Table;
