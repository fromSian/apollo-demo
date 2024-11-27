import React from "react";
import { UpdateParams } from "../../hooks/useFilter";
import { TableParams } from "../config";
import Paginator from "./paginator";
import TableContent from "./table-content";

type TableWrapProps = {
  datas: unknown[];
  total: number;
  params: TableParams;
  updateFilters: (v: UpdateParams) => void;
};

const TableWrap = ({ total, datas, updateFilters, params }: TableWrapProps) => {
  const { page, size } = params || {};
  return (
    <>
      <TableContent datas={datas} />
      <Paginator
        page={page}
        size={size}
        updateFilters={updateFilters}
        total={total}
      />
    </>
  );
};

export default TableWrap;
