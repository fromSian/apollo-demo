import React from "react";
import Paginator from "./paginator";
import TableContent from "./table-content";

const TableWrap = ({ total }) => {
  return (
    <>
      <TableContent />
      <Paginator total={total} />
    </>
  );
};

export default TableWrap;
