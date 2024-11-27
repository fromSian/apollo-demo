import React from "react";
import { Params } from ".";
import { UpdateParams } from "../../hooks/useFilter";
import Paginator from "./paginator";
import TableContent from "./table-content";

type TableWrapProps = {
  total: number;
  params: Params;
  updateFilters: (v: UpdateParams) => void;
};

const TableWrap = ({ total, updateFilters, params }: TableWrapProps) => {
  const { page, size } = params || {};
  return (
    <>
      <TableContent />
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
